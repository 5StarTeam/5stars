import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global'

export default function SortContainer({ sort, handleSortRarest, handleSortLatest }) {
  // const imageSrc =
  //   attraction.imageUrls
  //     ? { uri: attraction.imageUrls }
  //     : { uri: "http://animal.memozee.com/ArchOLD-7/1197452567.jpg"}

  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity style={sort === 0 && { marginRight: 10 }} onPress={handleSortRarest}>
        {/* <TouchableOpacity style={sort === 0 && { marginRight: 10 }} onPress={readData}> */}
        <Text style={sort === 0 ? styles.activeText : styles.inactiveText}>Rarest</Text>
        <View style={sort === 0 && styles.activeLine} />
      </TouchableOpacity>
      <TouchableOpacity style={sort === 1 && { marginLeft: 10 }} onPress={handleSortLatest}>
        <Text style={sort === 1 ? styles.activeText : styles.inactiveText}>Latest</Text>
        <View style={sort === 1 && styles.activeLine} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 25,
    paddingBottom: 10,
  },
  activeLine: {
    backgroundColor: '#E6998C',
    height: 4,
    borderRadius: 10,
    marginTop: 5,
    width: '75%',
    alignSelf: 'center',
  },
  activeText: {
    fontWeight: 'bold',
    color: '#E6998C',
  },
  inactiveText: {
    color: '#A4A4A4',
  },
})
