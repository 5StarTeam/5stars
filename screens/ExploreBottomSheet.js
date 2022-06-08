import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FlatList, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../components/BottomSheet'
import SightCard from '../components/sightseeing/SightCard'
import { globalStyles } from '../styles/global'

const ExploreBottomSheet = () => {
  const ref = useRef(null);
  // 0 for rarest, 1 for latest
  const [sort, setSort] = useState(0);
  const [sights, setSights] = useState([
    { commonName: "alice", rarity: 5, createdAt: 20 },
    { commonName: "betty", rarity: 2, createdAt: 10 },
    { commonName: "carol", rarity: 1, createdAt: 30 },
    { commonName: "dave", rarity: 10, createdAt: 30 },
    { commonName: "elsa", rarity: 5, createdAt: 40 },
    { commonName: "felix", rarity: 6, createdAt: 50 },
    { commonName: "george", rarity: 7, createdAt: 60 },
    { commonName: "holger", rarity: 8, createdAt: 70 },
    { commonName: "ida", rarity: 9, createdAt: 80 },
    { commonName: "john", rarity: 5, createdAt: 90 },
    { commonName: "klare", rarity: 5, createdAt: 35 },
    { commonName: "luna", rarity: 5, createdAt: 37 },
  ].sort((a, b) => b.rarity - a.rarity));

  /*
  const handlePress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);
   */


  const sightList = sights.map((sight, i) => {
    return (<SightCard sight={sight} handlePress={() => {console.log(sight)}}/>)
  })

  const handleSortRarest = () => {
    setSort(0);
    // descending rarity
    setSights([...sights].sort((a, b) => b.rarity - a.rarity));
  }

  const handleSortLatest = () => {
    setSort(1);
    // ascending time
    setSights([...sights].sort((a, b) => a.createdAt - b.createdAt));
  }

  // const renderSight = ({ item, index }) => {
  //   return (<SightCard sight={item} handlePress={() => {console.log(item)}}/>)
  // }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/*<TouchableOpacity style={styles.button} onPress={handlePress}>*/}
        {/*</TouchableOpacity>*/}

        <BottomSheet ref={ref}>
          <View style={styles.filterContainer}>
            <TouchableOpacity style={sort === 0 && { marginRight: 10}} onPress={handleSortRarest}>
              <Text style={sort === 0 ? styles.activeText : styles.inactiveText}>Rarest</Text>
              <View style={sort === 0 && styles.activeLine}/>
            </TouchableOpacity>
            <TouchableOpacity style={sort === 1 && { marginLeft: 10}} onPress={handleSortLatest}>
              <Text style={sort === 1 ? styles.activeText : styles.inactiveText}>Latest</Text>
              <View style={sort === 1 && styles.activeLine}/>
            </TouchableOpacity>
          </View>


          <View style={styles.exploreContainer}>
            {/* single card per row */}
            {/*<FlatList*/}
            {/*  data={sights}*/}
            {/*  renderItem={renderSight}*/}
            {/*  keyExtractor={sight => sight.commonName}*/}
            {/*/>*/}
            <View style={globalStyles.exploreSightsContainer}>{sightList}</View>

          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  )
}

export default ExploreBottomSheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDE9E7",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 25,
  },
  activeLine: {
    backgroundColor: "#E6998C",
    height: 4,
    borderRadius: 10,
    marginTop: 5,
    width: "75%",
    alignSelf: "center"
  },
  activeText: {
    fontWeight: "bold",
    color: "#E6998C",
  },
  inactiveText: {
    color: "#A4A4A4"
  },
  exploreContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15
  }
})
