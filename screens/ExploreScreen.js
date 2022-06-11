import React, { useRef, useEffect } from 'react'
import { View } from 'react-native'
import MapboxGL from '@rnmapbox/maps'
import MarkerShapeSource from '../components/MarkerShapeSource'

const ExploreScreen = () => {
  MapboxGL.setAccessToken(process.env.MAPBOX_ACCESSTOKEN);
  const camera = useRef();
  
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
          centerCoordinate={[103.851959, 1.290270]}
        ></MapboxGL.Camera>
      </MapboxGL.MapView>
    </View>
  )
}

export default ExploreScreen
