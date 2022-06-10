import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native'
import { app } from '../core/Firebase'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const auth = getAuth(app)

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      user && navigation.replace('Home')
    })

    return unsubscribe
  }, []) //Empty array means this will run on component mount

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user
        console.log('Registered with:', user.email)
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user
        console.log('Logged in with:', user.email)
      })
      .catch(error => alert(error.message))
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      behavior="padding"
      style={globalStyles.keyboardAvoidViewContainer}
    >
      <View style={globalStyles.signupLoginContainer}>
        <Text style={globalStyles.titleText}>Login to BirdGO</Text>
        <View style={globalStyles.inputWrapper}>
          <View style={globalStyles.iconWrapper}>
            <Ionicons
              name="mail"
              size={18}
              color="#AE908C"
              style={{
                marginLeft: 2,
              }}
            />
          </View>
          <TextInput
            autoCapitalize="none"
            autoComplete="email"
            style={globalStyles.input}
            placeholderTextColor="#AE908C"
            placeholder="Email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>

        <View style={globalStyles.inputWrapper}>
          <View style={globalStyles.iconWrapper}>
            <MaterialIcons name="lock" size={20} color="#AE908C" />
          </View>
          <TextInput
            autoCapitalize="none"
            autoComplete="password"
            style={globalStyles.input}
            placeholderTextColor="#AE908C"
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={value => setPassword(value)}
          />
        </View>

        <TouchableOpacity style={globalStyles.btnContainer} onPress={handleLogin}>
          <Text style={globalStyles.btnText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 20, marginBottom: 5, color: '#AE908C' }}>New Here?</Text>

        <TouchableOpacity style={globalStyles.btnContainerAlt} onPress={() => handleSignUp()}>
          <Text style={globalStyles.btnTextAlt}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen
