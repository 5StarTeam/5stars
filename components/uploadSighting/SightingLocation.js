import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { globalStyles, placeholderColor } from '../../styles/global'

const SightingLocation = ({ location }) => {
  return (
    <View style={styles.flexRow}>
      <Pressable style={styles.locationWrapper}>
        <Ionicons name="ios-location-sharp" size={24} color={placeholderColor} />
        <Text style={[globalStyles.text, { marginLeft: 8 }]}>{location}</Text>
      </Pressable>
    </View>
  )
}

export default SightingLocation

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ECECEC',
    paddingVertical: 8,
    borderBottomWidth: 1,
    width: '100%',
    marginTop: 5,
  },
})
