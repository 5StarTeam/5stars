import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableWithoutFeedbackComponent,
} from 'react-native'
import { app } from '../core/Firebase'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

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
    // <KeyboardAvoidingView style={styles.container} behavior="padding">
    //   <View style={styles.inputContainer}>
    //     <TextInput placeholder="Email" value={email} onChangeText={text => setEmail(text)} style={styles.input} />
    //     <TextInput
    //       placeholder="Password"
    //       value={password}
    //       onChangeText={text => setPassword(text)}
    //       style={styles.input}
    //       secureTextEntry
    //     />
    //   </View>
    //
    //   <View style={styles.buttonContainer}>
    //     <TouchableOpacity onPress={handleLogin} style={styles.button}>
    //       <Text style={styles.buttonText}>Login</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutline]}>
    //       <Text style={styles.buttonOutlineText}>Register</Text>
    //     </TouchableOpacity>
    //   </View>
    // </KeyboardAvoidingView>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.signupLoginContainer}>
        <Text style={globalStyles.titleText}>Login to BirdGO</Text>
        <View style={globalStyles.inputWrapper}>
          <View style={globalStyles.iconWrapper}>
            {/*<FontAwesome5*/}
            {/*  name="user-alt"*/}
            {/*  size={18}*/}
            {/*  color="#d4af95"*/}
            {/*  style={{*/}
            {/*    marginLeft: 2,*/}
            {/*  }}*/}
            {/*/>*/}
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
            onChangeText={(value) => setEmail(value)}
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
            onChangeText={(value) => setPassword(value)}
          />
        </View>

        <TouchableOpacity
          style={globalStyles.btnContainer}
          onPress={handleLogin}
        >
          <Text style={globalStyles.btnText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 20, marginBottom: 5, color: "#AE908C" }}>
          New Here?
        </Text>

        <TouchableOpacity
          style={globalStyles.btnContainerAlt}
          onPress={() => handleSignUp()}
        >
          <Text style={globalStyles.btnTextAlt}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})
