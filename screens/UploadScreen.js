import React, { useState } from 'react'
import { KeyboardAvoidingView, Keyboard, Platform, View, TouchableWithoutFeedback, TextInput, } from 'react-native'
import { ButtonPrimary, ButtonAlt } from '../components/Buttons';
import { globalStyles as styles } from '../styles/global';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { NumberInputWithHeader } from '../components/Inputs';

const UploadScreen = () => {
  const navigation = useNavigation()
  const [date, setDate] = useState(new Date())
  const [numBirds, setNumBirds] = useState(1)
  const [open, setOpen] = useState(false)
  const onChange = (event, selectedDate) => {
    setOpen(Platform.OS === 'ios')
  }
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      onPress={() => {
        Keyboard.dismiss()
        setOpen(false)
      }}
    >
      <TouchableWithoutFeedback>
        <View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="What bird did you see?" style={styles.input} />
            <NumberInputWithHeader headerTitle="How many?" number={numBirds} setNumber={setNumBirds} />
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