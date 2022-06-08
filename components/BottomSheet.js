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

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const BottomSheet = forwardRef(({ children }, ref) => {
  const translateY = useSharedValue(0)
  const active = useSharedValue(false)
  const context = useSharedValue({ y: 0 })
  const [isVertical, setIsVertical] = useState(false)
  // 0 for rarest, 1 for latest
  const [sort, setSort] = useState(0)
  const [sights, setSights] = useState(
    [
      { commonName: 'alice', rarity: 5, createdAt: 20 },
      { commonName: 'betty', rarity: 2, createdAt: 10 },
      { commonName: 'carol', rarity: 1, createdAt: 30 },
      { commonName: 'dave', rarity: 10, createdAt: 30 },
      { commonName: 'elsa', rarity: 5, createdAt: 40 },
      { commonName: 'felix', rarity: 6, createdAt: 50 },
      { commonName: 'george', rarity: 7, createdAt: 60 },
      { commonName: 'holger', rarity: 8, createdAt: 70 },
      { commonName: 'ida', rarity: 9, createdAt: 80 },
      { commonName: 'john', rarity: 5, createdAt: 90 },
      { commonName: 'klare', rarity: 5, createdAt: 35 },
      { commonName: 'luna', rarity: 5, createdAt: 37 },
    ].sort((a, b) => b.rarity - a.rarity)
  )

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
      setIsVertical(translateY.value <= -SCREEN_HEIGHT / 1.9)
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
    translateY.value = withSpring(-SCREEN_HEIGHT / 2.1, { damping: 12 })
  }, [])

  const sortContainer = () => {
    return (
      <View style={styles.filterContainer}>
        <TouchableOpacity style={sort === 0 && { marginRight: 10 }} onPress={handleSortRarest}>
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
  const sightList = isHorizontalScroll =>
    sights.map((sight, i) => {
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
    setSights([...sights].sort((a, b) => b.rarity - a.rarity))
  }

  const handleSortLatest = () => {
    setSort(1)
    // ascending time
    setSights([...sights].sort((a, b) => a.createdAt - b.createdAt))
  }

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, animateBottomSheetStyle]}>
        <View style={styles.line} />
        {/*{children}*/}
        {sortContainer()}

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
  exploreContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
})

export default BottomSheet
