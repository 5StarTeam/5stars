import React, { useRef } from 'react'
import { View } from 'react-native'
import MapboxGL from '@rnmapbox/maps'
import MarkerShapeSource from '../components/MarkerShapeSource'

const ExploreScreen = () => {
  const camera = useRef()

  const handlePressMarker = feature => {
    console.log('Fly to coordinates:', feature.geometry.coordinate)
    camera.current.setCamera({
      centerCoordinate: feature.geometry.coordinates,
      zoomLevel: 14,
      animationDuration: 700,
    })
  }

  return (
    <View style={{ flex: 1, height: '100%', width: '100%' }}>
      <MapboxGL.MapView style={{ flex: 1 }} attributionEnabled={false} logoEnabled={false}>
        <MarkerShapeSource onPressMarker={handlePressMarker}></MarkerShapeSource>
        <MapboxGL.Camera
          ref={camera}
          zoomLevel={1}
          zoomEnabled={true}
          animationMode={'flyTo'}
          animationDuration={1000}
          centerCoordinate={[-50, 50]}
        ></MapboxGL.Camera>
      </MapboxGL.MapView>
    </View>
  )
}

export default ExploreScreen
