import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

const UploadSightingScreen = () => {
  return (
    <KeyboardAvoidingView style={globalStyles.containerStd} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default UploadSightingScreen

const styles = StyleSheet.create({})
