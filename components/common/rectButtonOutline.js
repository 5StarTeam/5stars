import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/global'

function RectButtonOutline({ text, handlePress }) {
  return (
    <TouchableOpacity style={globalStyles.btnContainerSqAlt} onPress={handlePress}>
      <Text style={globalStyles.btnTextAlt}>{text}</Text>
    </TouchableOpacity>
  )
}

export default RectButtonOutline
