import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { app } from '../core/Firebase'
import { getAuth, signOut, sendEmailVerification } from 'firebase/auth'

const auth = getAuth(app)

const VerifyScreen = () => {
  const navigation = useNavigation()

  const handleBack = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('Login')
      })
      .catch((error) => alert(error.message))
  }

  const handleResendEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => alert('resent verification email'))
      .catch((error) => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Please verify your email.</Text>
      <Text>
        We've sent an email to {auth.currentUser?.email} to verify your email address.
      </Text>
      <TouchableOpacity onPress={handleResendEmail} style={styles.button}>
        <Text style={styles.buttonText}>Resend Email</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBack} style={styles.button}>
        <Text style={styles.buttonText}>Back to Login Page</Text>
      </TouchableOpacity>
    </View>
  )
}

export default VerifyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  }
})
