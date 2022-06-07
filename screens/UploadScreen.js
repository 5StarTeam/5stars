import React, { useState } from 'react'
import { KeyboardAvoidingView, Keyboard, Platform, View, TouchableWithoutFeedback, TextInput, } from 'react-native'
import { DefaultButton, OutlinedButton } from '../components/ReusableStyledComponents';
import { styles } from '../core/style';
import DateTimePicker from '@react-native-community/datetimepicker';

const UploadScreen = () => {
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
            <OutlinedButton title="What time?" onPress={() => setOpen(true)} />
          </View>
          <View style={styles.btnContainer}>
            <DefaultButton title="Submit" onPress={Keyboard.dismiss} />
          </View>
          {open && (<DateTimePicker mode='time' value={new Date()} onChange={onChange} />)}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default UploadScreen