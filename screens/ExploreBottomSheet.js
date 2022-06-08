import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FlatList, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet from '../components/BottomSheet'
import SightCard from '../components/sightseeing/SightCard'
import { globalStyles } from '../styles/global'

const ExploreBottomSheet = () => {
  const ref = useRef(null)

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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/*<TouchableOpacity style={styles.button} onPress={handlePress}>*/}
        {/*</TouchableOpacity>*/}

        <BottomSheet ref={ref}></BottomSheet>
      </View>
    </GestureHandlerRootView>
  )
}

export default ExploreBottomSheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE9E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },
})
