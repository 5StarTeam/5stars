import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { app } from '../core/Firebase'
import { getAuth, signOut } from 'firebase/auth'
import RectButton from '../components/common/rectButton'
import { globalStyles } from '../styles/global'
import RectButtonOutline from '../components/common/rectButtonOutline'

const auth = getAuth(app)

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('Login')
      })
      .catch(error => alert(error.message))
  }

  const handleExample = () => {
    navigation.navigate('Example')
  }

  const handleNavigateBottomDrawer = () => {
    navigation.navigate('Explore Bottom Sheet')
  }

  const handleExplore = () => {
    navigation.navigate('Explore Map')
  }

  const handleVerify = () => {
    navigation.navigate('Verify')
  }

  const handleBirdDetails = () => {
    navigation.navigate('Bird Details')
  }

  const handleProfile = () => {
    navigation.navigate('Profile')
  }

  const handleEditProfile = () => {
    navigation.navigate('Edit Profile')
  }

  const handleUploadSighting = () => {
    navigation.navigate('Upload Sighting')
  }

  return (
    <View style={globalStyles.signupLoginContainer}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <RectButton text={'Sign out'} handlePress={handleSignOut} />
      <RectButtonOutline text={'CRUD page'} handlePress={handleExample} />
      <RectButtonOutline text={'Explore Bottom Drawer'} handlePress={handleNavigateBottomDrawer} />
      <RectButtonOutline text={'Explore Map'} handlePress={handleExplore} />
      <RectButtonOutline text={'Verify'} handlePress={handleVerify} />
      <RectButtonOutline text={'Bird Details'} handlePress={handleBirdDetails} />
      <RectButtonOutline text={'Profile'} handlePress={handleProfile} />
      <RectButtonOutline text={'Edit Profile'} handlePress={handleEditProfile} />
      <RectButtonOutline text={'Upload Sighting'} handlePress={handleUploadSighting} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCFC',
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
  },
})
