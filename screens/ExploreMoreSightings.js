import React, { useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import SightCard from '../components/sightseeing/SightCard'
import SightsList from '../components/sightseeing/SightsList'
import SortContainer from '../components/sightseeing/SortContainer'
import { globalStyles } from '../styles/global'

function ExploreMoreSightings({ route, navigation }) {
  const { initialSightsData, initialSort } = route.params
  const [sightsData, setSightsData] = useState(initialSightsData)
  const [sort, setSort] = useState(initialSort)

  const handleSortRarest = () => {
    setSort(0)
    // descending rarity
    setSightsData([...sightsData].sort((a, b) => b.rarityScore - a.rarityScore))
  }

  const handleSortLatest = () => {
    setSort(1)
    // ascending time
    // setSightsData([...sightsData].sort((a, b) => a.createdAt - b.createdAt))
    setSightsData([...sightsData].sort((a, b) => a.rarityScore - b.rarityScore))
  }

  return (
    <View style={styles.container}>
      <SortContainer sort={sort} handleSortRarest={handleSortRarest} handleSortLatest={handleSortLatest} />
      <SightsList sightsData={sightsData} isHorizontalScroll={false} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCFC',
  },
})

export default ExploreMoreSightings
