import React, { useCallback, useEffect, forwardRef, useImperativeHandle, useState } from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, ScrollView } from 'react-native'
import { Gesture } from 'react-native-gesture-handler'
import { GestureDetector } from 'react-native-gesture-handler/src/handlers/gestures/GestureDetector'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { globalStyles } from '../styles/global'
import SightCard from './sightseeing/SightCard'
import { doc, getDocs, setDoc, deleteDoc, collection } from 'firebase/firestore'
import { app, db } from '../core/Firebase'
import { getFirestore } from 'firebase/firestore'
import { async } from '@firebase/util'
import SortContainer from './sightseeing/sortContainer'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const BottomSheet = forwardRef(({ children }, ref) => {
  // const db = getFirestore(app)
  const translateY = useSharedValue(0)
  const active = useSharedValue(false)
  const context = useSharedValue({ y: 0 })
  const [isVertical, setIsVertical] = useState(false)
  // 0 for rarest, 1 for latest
  const [sort, setSort] = useState(0)
  // const [sights, setSights] = useState(
  //   [
  //     { commonName: 'alice', rarity: 5, createdAt: 20 },
  //     { commonName: 'betty', rarity: 2, createdAt: 10 },
  //     { commonName: 'carol', rarity: 1, createdAt: 30 },
  //     { commonName: 'dave', rarity: 10, createdAt: 30 },
  //     { commonName: 'elsa', rarity: 5, createdAt: 40 },
  //     { commonName: 'felix', rarity: 6, createdAt: 50 },
  //     { commonName: 'george', rarity: 7, createdAt: 60 },
  //     { commonName: 'holger', rarity: 8, createdAt: 70 },
  //     { commonName: 'ida', rarity: 9, createdAt: 80 },
  //     { commonName: 'john', rarity: 5, createdAt: 90 },
  //     { commonName: 'klare', rarity: 5, createdAt: 35 },
  //     { commonName: 'luna', rarity: 5, createdAt: 37 },
  //   ].sort((a, b) => b.rarity - a.rarity)
  // )
  const [sightsData, setSightsData] = useState()

  const scrollTo = useCallback(destination => {
    active.value = destination === -SCREEN_HEIGHT / 2.2

    translateY.value = withSpring(destination, { damping: 12 })
  }, [])

  const isActive = useCallback(() => {
    return active.value
  }, [])

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive])

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value }
    })
    .onUpdate(e => {
      translateY.value = Math.max(e.translationY + context.value.y, -SCREEN_HEIGHT)
      // active.value = translateY.value <= -SCREEN_HEIGHT / 2
      setIsVertical(translateY.value <= -SCREEN_HEIGHT / 1.7)
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 2.5) {
        // hide bottom sheet
        scrollTo(-100)
      } else if (translateY.value < -SCREEN_HEIGHT / 1.2) {
        // expand to occupy entire screen
        scrollTo(-SCREEN_HEIGHT)
      }
    })

  const animateBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [-SCREEN_HEIGHT + 50, -SCREEN_HEIGHT],
      [25, 0],
      Extrapolate.CLAMP
    )
    return {
      borderRadius: borderRadius,
      transform: [{ translateY: translateY.value }],
    }
  })

  useEffect(() => {
    // smaller divider factor => nearer to the top of the screen
    translateY.value = withSpring(-SCREEN_HEIGHT / 1.8, { damping: 12 })

    const fetchData = async () => {
      try {
        console.log('FETCH DATA')
        const sightingsSnapshot = await getDocs(collection(db, 'birds'))
        let tempData = []
        sightingsSnapshot.forEach(doc => {
          tempData.push(doc.data())
        })

        setSightsData(tempData.sort((a, b) => b.rarityScore - a.rarityScore))
      } catch (err) {
        console.log('ERROR')
        console.log(err)
      }
    }
    fetchData()
  }, [])

  const sightList = isHorizontalScroll =>
    sightsData?.map((sight, i) => {
      return (
        <SightCard
          sight={sight}
          handlePress={() => {
            console.log(sight)
          }}
          key={sight.commonName}
          isHorizontalScroll={isHorizontalScroll}
        />
      )
    })

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
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, animateBottomSheetStyle]}>
        <View style={styles.line} />
        {/*{children}*/}
        <SortContainer sort={sort} handleSortRarest={handleSortRarest} handleSortLatest={handleSortLatest} />

        {isVertical ? (
          <ScrollView style={globalStyles.tripsContainer}>
            <View style={globalStyles.exploreSightsContainer}>{sightList(false)}</View>
          </ScrollView>
        ) : (
          <ScrollView style={globalStyles.tripsContainer} horizontal={true}>
            <View style={globalStyles.exploreSightsScrollContainer}>{sightList(true)}</View>
          </ScrollView>
        )}
      </Animated.View>
    </GestureDetector>
  )
})

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
    shadowColor: '#A66155',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 11,
  },
  line: {
    width: 92,
    height: 4,
    backgroundColor: '#E5D7D5',
    alignSelf: 'center',
    top: 12,
    borderRadius: 5,
  },
  exploreContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
})

export default BottomSheet
