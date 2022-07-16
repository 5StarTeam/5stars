import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/global'

function RoundButtonOutline({ text, handlePress }) {
  return (
    <TouchableOpacity style={globalStyles.btnContainerAlt} onPress={handlePress}>
      <Text style={globalStyles.btnTextAlt}>{text}</Text>
    </TouchableOpacity>
  )
}

export default RoundButtonOutline
