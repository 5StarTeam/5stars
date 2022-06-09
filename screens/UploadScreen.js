import React, { useState } from 'react'
import { KeyboardAvoidingView, Keyboard, Platform, View, TouchableWithoutFeedback, TextInput, } from 'react-native'
import { ButtonPrimary, ButtonAlt } from '../components/Buttons';
import { styles } from '../core/style';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const UploadScreen = () => {
  const navigation = useNavigation()
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const onChange = (event, selectedDate) => {
    setOpen(Platform.OS === 'ios')
  }
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
        setOpen(false)
      }}>
        <View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="What bird did you see?" style={styles.input} />
            <TextInput placeholder="How many?" style={styles.input} />
            <ButtonAlt title="What time?" onPress={() => setOpen(true)} />
          </View>
          <View style={styles.btnContainer}>
            <ButtonPrimary title="Submit" onPress={Keyboard.dismiss} />
          </View>
          {open && (<DateTimePicker mode='time' value={new Date()} onChange={onChange} />)}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default UploadScreen