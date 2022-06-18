import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { placeholderColor, textColor } from '../../styles/global'

const DescriptionTextarea = ({ description, setDescription }) => {
  return (
    <View style={styles.textInputWrapper}>
      <TextInput
        autoCapitalize="none"
        multiline={true}
        placeholderTextColor={placeholderColor}
        placeholder="Describe where it is..."
        value={description}
        onChangeText={text => setDescription(text)}
        style={styles.descriptionText}
      />
    </View>
  )
}

export default DescriptionTextarea

const styles = StyleSheet.create({
  textInputWrapper: {
    width: '100%',
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    height: 210,
    paddingVertical: 10,
  },
  descriptionText: {
    color: textColor,
    lineHeight: 21,
  },
})
