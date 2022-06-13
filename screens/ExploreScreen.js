import React, { useRef, useEffect, useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native'
import MapboxGL from '@rnmapbox/maps'
import MarkerShapeSource from '../components/MarkerShapeSource'
import BottomSheet from '../components/BottomSheet'
import ExploreTop from '../components/explore/ExploreTop'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { textColor } from '../styles/global'

const ExploreScreen = () => {
  MapboxGL.setAccessToken(process.env.MAPBOX_ACCESSTOKEN)
  const bottomSheet = useRef(null)
  const camera = useRef()

  const [locationAccess, setLocationAccess] = useState(false)

  useEffect(() => {
    const requestLocation = async () => {
      let acc = await MapboxGL.requestAndroidLocationPermissions().then(res => res)
      console.log(acc)
      return acc
    }

    setLocationAccess(requestLocation())
  }, [])

  const handlePressMarker = feature => {
    console.log('Fly to coordinates:', feature.geometry.coordinate)
    camera.current.setCamera({
      centerCoordinate: feature.geometry.coordinates,
      zoomLevel: 16,
      animationDuration: 700,
    })
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <View style={{ flex: 0.55 }}>
          <ExploreTop />
          <MapboxGL.MapView style={{ flex: 1 }} attributionEnabled={false} logoEnabled={false}>
            <MarkerShapeSource onPressMarker={handlePressMarker}></MarkerShapeSource>
            <MapboxGL.Camera
              ref={camera}
              zoomLevel={10}
              zoomEnabled={true}
              animationMode={'flyTo'}
              animationDuration={1000}
              centerCoordinate={[103.851959, 1.29027]}
            ></MapboxGL.Camera>
          </MapboxGL.MapView>
          <TouchableOpacity style={[styles.bottomBtnWrapper, styles.uploadBtn]}>
            <FontAwesome5 name="upload" size={28} color={'#A66155'} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.bottomBtnWrapper, styles.targetBtn]}>
            <MaterialCommunityIcons name="target" size={35} color={'#A66155'} />
          </TouchableOpacity>
          <BottomSheet ref={bottomSheet} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  bottomBtnWrapper: {
    position: 'absolute',
    bottom: 20,
  },
  uploadBtn: {
    left: 15,
  },
  targetBtn: {
    right: 10,
  },
})
