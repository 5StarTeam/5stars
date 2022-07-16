import React, { useCallback, useEffect, forwardRef, useImperativeHandle, useState } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native'
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
import SortContainer from './sightseeing/SortContainer'
import { useNavigation } from '@react-navigation/core'
import SightsList from './sightseeing/SightsList'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const BottomSheet = forwardRef(({ children }, ref) => {
  const translateY = useSharedValue(0)
  const active = useSharedValue(false)
  const context = useSharedValue({ y: 0 })
  const [isVertical, setIsVertical] = useState(false)
  // 0 for rarest, 1 for latest
  const [sort, setSort] = useState(0)
  const [sightsData, setSightsData] = useState([])
  const navigation = useNavigation()

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
    translateY.value = withSpring(-SCREEN_HEIGHT / 1.9, { damping: 12 })

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
    return () => {
      console.log('unmount bottom sheet')
      setSightsData([])
    }
  }, [])

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

  const handleMoreSightings = () => {
    navigation.navigate('Explore More Sightings', {
      initialSightsData: sightsData ?? [],
      initialSort: sort ?? 0,
    })
  }

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, animateBottomSheetStyle]}>
        <TouchableWithoutFeedback onPress={handleMoreSightings}>
          <View style={styles.line}></View>
        </TouchableWithoutFeedback>
        {/*{children}*/}
        <SortContainer sort={sort} handleSortRarest={handleSortRarest} handleSortLatest={handleSortLatest} />
        <SightsList sightsData={sightsData} isHorizontalScroll={!isVertical} />
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
    top: 10,
    borderRadius: 5,
  },
})

export default BottomSheet
