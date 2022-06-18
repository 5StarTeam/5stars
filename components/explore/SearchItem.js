import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React from 'react'
import { captionColor, globalStyles } from '../../styles/global'
import { useNavigation } from '@react-navigation/native'

export default function SearchItem({ item, handlePress }) {
  // const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.searchItem}>
        <Text style={[globalStyles.text, { fontSize: 14, lineHeight: 18 }]}>{item.commonName}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  searchItem: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomColor: captionColor,
    borderBottomWidth: 0.5,
    width: '95%',
    alignSelf: 'center',
  },
})
