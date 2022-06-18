import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/global'

function RectButton({ text, handlePress, colorVariant }) {
  return (
    <TouchableOpacity
      style={[globalStyles.btnContainerSq, colorVariant && { backgroundColor: colorVariant }]}
      onPress={handlePress}
    >
      <Text style={globalStyles.btnText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default RectButton
