import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { containerBgColor } from '../../styles/global'
import SearchBar from './SearchBar'

const ExploreTop = () => {
  return (
    <View style={styles.exploreTopContainer}>
      <TouchableOpacity style={styles.reloadWrapper}>
        <MaterialCommunityIcons name="reload" size={28} color={containerBgColor} />
      </TouchableOpacity>

      <SearchBar />
    </View>
  )
}

export default ExploreTop

const styles = StyleSheet.create({
  exploreTopContainer: {
    position: 'absolute',
    top: 10,
    zIndex: 2,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  reloadWrapper: {
    backgroundColor: '#A66155',
    paddingLeft: 2.5,
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(166, 97, 85, 0.8)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginRight: 10,
  },
})
