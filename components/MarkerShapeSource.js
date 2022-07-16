import React from 'react'
import MapboxGL from '@rnmapbox/maps'

const MarkerShapeSource = props => {
  var geoJson = require('../data/singapore.json')
  const icon = {
    iconImage: require('../assets/marker-red.png'),
    iconAllowOverlap: true,
    iconSize: 0.8,
  }

  return (
    <MapboxGL.ShapeSource
      id={'shapeSource'}
      hitbox={{ width: 20, height: 20 }}
      onPress={e => {
        // work around as coordinates from e are not accurate
        // title / id must be unique
        var feature = geoJson.features.find(f => f.properties.title == e.features[0].properties.title)
        if (!feature) {
          feature = e.features[0]
        }
        props.onPressMarker(feature)
      }}
      type="geojson"
      shape={geoJson}
    >
      <MapboxGL.SymbolLayer id={'unselected'} style={icon} iconAnchor={'bottom'}></MapboxGL.SymbolLayer>
    </MapboxGL.ShapeSource>
  )
}

export default MarkerShapeSource
