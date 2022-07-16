import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { Text, View } from 'react-native'
import { app } from '../core/Firebase'
import { getAuth, signOut, sendEmailVerification } from 'firebase/auth'
import { Route } from '../services/RoutingService'
import { globalStyles } from '../styles/global'
import RoundButtonOutline from '../components/common/roundButtonOutline'
import RoundButton from '../components/common/roundButton'

const auth = getAuth(app)

const VerifyScreen = () => {
  const navigation = useNavigation()

  const handleBack = () => {
    signOut(auth)
      .then(() => {
        navigation.replace(Route.LOGIN)
      })
      .catch(error => alert(error.message))
  }

  const handleResendEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => alert('resent verification email'))
      .catch(error => alert(error.message))
  }

  return (
    <View style={[globalStyles.signupLoginContainer]}>
      <View>
        <Text style={[globalStyles.text, { marginBottom: 16 }]}>
          We've sent an email to {auth.currentUser?.email} to verify your email address.
        </Text>
        <Text style={[globalStyles.text, { marginBottom: 16 }]}>
          Please click the link in the email to verify your account to complete your registration.
        </Text>
      </View>
      <RoundButton text={'Resend email'} handlePress={handleResendEmail} />
      <RoundButtonOutline text={'Back to Login'} handlePress={handleBack} />
    </View>
  )
}

export default VerifyScreen
