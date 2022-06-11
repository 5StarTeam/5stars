import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/global'

function RectButton({ text, handlePress }) {
  return (
    <TouchableOpacity style={globalStyles.btnContainerSq} onPress={handlePress}>
      <Text style={globalStyles.btnText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default RectButton
