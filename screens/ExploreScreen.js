import React, { useRef, useEffect, useState } from 'react'
import { View } from 'react-native'
import MapboxGL from '@rnmapbox/maps'
import MarkerShapeSource from '../components/MarkerShapeSource'
import BottomSheet from '../components/BottomSheet'

const ExploreScreen = () => {
  MapboxGL.setAccessToken(process.env.MAPBOX_ACCESSTOKEN);
  const bottomSheet = useRef(null);
  const camera = useRef();

  const [locationAccess, setLocationAccess] = useState(false);
  
  useEffect(() => {
        const requestLocation = async () => {
            let acc = await MapboxGL.requestAndroidLocationPermissions().then(res => res);
            console.log(acc);
            return acc;
        }
        
        setLocationAccess(requestLocation());
    }, []);

  const handlePressMarker = feature => {
    console.log('Fly to coordinates:', feature.geometry.coordinate)
    camera.current.setCamera({
      centerCoordinate: feature.geometry.coordinates,
      zoomLevel: 16,
      animationDuration: 700,
    })
  }

  return (
    <View style={{ flex: 0.5, height: '100%', width: '100%' }}>
        <MapboxGL.MapView style={{ flex: 1 }} attributionEnabled={false} logoEnabled={false}>
            <MarkerShapeSource onPressMarker={handlePressMarker}></MarkerShapeSource>
            <MapboxGL.Camera
            ref={camera}
            zoomLevel={10}
            zoomEnabled={true}
            animationMode={'flyTo'}
            animationDuration={1000}
            centerCoordinate={[103.851959, 1.290270]}
            ></MapboxGL.Camera>
        </MapboxGL.MapView>
        <BottomSheet ref={bottomSheet} />
    </View>
  )
}

export default ExploreScreen
