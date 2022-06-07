import React, { useCallback, useEffect, forwardRef, useImperativeHandle } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Gesture } from 'react-native-gesture-handler'
import { GestureDetector } from 'react-native-gesture-handler/src/handlers/gestures/GestureDetector'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const BottomSheet = forwardRef(({children}, ref) => {
  const translateY = useSharedValue(0)
  const active = useSharedValue(false)

  const scrollTo = useCallback((destination) => {
    active.value = destination !== 0;

    translateY.value = withSpring(destination, {damping: 12})
  }, [])

  const isActive = useCallback(() => {
    return active.value;
  }, [])

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive])

  const context = useSharedValue({ y: 0 })
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value }
    }).onUpdate(e => {
      translateY.value = Math.max(e.translationY + context.value.y, -SCREEN_HEIGHT)
    }).onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 2.5) {
        // hide bottom sheet
        scrollTo(-100)
      } else if (translateY.value < -SCREEN_HEIGHT / 1.2) {
        // expand to occupy entire screen
        scrollTo(-SCREEN_HEIGHT)
      }
    });


  const animateBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [-SCREEN_HEIGHT + 50, -SCREEN_HEIGHT],
      [25, 0],
      Extrapolate.CLAMP
    )
    return {
      borderRadius: borderRadius,
      transform: [{translateY: translateY.value}]
    }
  });

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 2.5, {damping: 12});
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, animateBottomSheetStyle]}>
        <View style={styles.line}/>
        {children}
      </Animated.View>
    </GestureDetector>
  );
})

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 25,
    shadowColor: "#A66155",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity:  0.21,
    shadowRadius: 8.19,
    elevation: 11
  },
  line: {
    width: 92,
    height: 4,
    backgroundColor: "#E5D7D5",
    alignSelf: "center",
    top: 12,
    borderRadius: 5
  }
})

export default BottomSheet