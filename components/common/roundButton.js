import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/global'

function RoundButton({ text, handlePress }) {
  return (
    <TouchableOpacity style={globalStyles.btnContainer} onPress={handlePress}>
      <Text style={globalStyles.btnText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default RoundButton
