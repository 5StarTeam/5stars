import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React from 'react'
import { captionColor, globalStyles } from '../../styles/global'
import { useNavigation } from '@react-navigation/native'

export default function SearchItem({ item }) {
  // const navigation = useNavigation()

  const handleNavigate = () => {
    console.log('navigate bird details: ' + item.commonName)
    // navigation.navigate('Bird Details')
  }

  return (
    <TouchableWithoutFeedback onPress={handleNavigate}>
      <View style={styles.searchItem}>
        <Text style={globalStyles.text}>{item.commonName}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  searchItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomColor: captionColor,
    borderBottomWidth: 0.5,
  },
})
