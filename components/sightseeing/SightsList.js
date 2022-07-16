import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import SightCard from './SightCard'
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../../styles/global'

const SightsList = ({ sightsData, isHorizontalScroll }) => {
  const navigation = useNavigation()

  const sightList = isHorizontalScroll =>
    sightsData?.map((sight, i) => (
      <SightCard
        sight={sight}
        handlePress={() => {
          navigation.navigate('Bird Details', {
            initialSight: sight,
          })
        }}
        key={sight.commonName}
        isHorizontalScroll={isHorizontalScroll}
      />
    ))

  if (isHorizontalScroll) {
    return (
      <ScrollView style={globalStyles.exploreViewContainer} horizontal={true}>
        <View style={globalStyles.exploreSightsScrollContainer}>{sightList(true)}</View>
      </ScrollView>
    )
  } else {
    return (
      <ScrollView style={globalStyles.exploreViewContainer}>
        <View style={globalStyles.exploreSightsContainer}>{sightList(false)}</View>
      </ScrollView>
    )
  }
}

export default SightsList

const styles = StyleSheet.create({})
