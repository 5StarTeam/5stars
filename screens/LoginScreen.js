import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { styles } from '../core/style'
import { app } from '../core/Firebase'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { DefaultButton, OutlinedButton } from '../components/ReusableStyledComponents'

const auth = getAuth(app);

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigation = useNavigation()
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
          user && navigation.replace("Home")
      });

    return unsubscribe
  }, []) //Empty array means this will run on component mount

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <DefaultButton onPress={handleLogin} title="Login" />
        <OutlinedButton onPress={handleSignUp} title="Register" />
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen
