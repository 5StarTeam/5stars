import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { app } from '../core/Firebase'
import { getAuth, signOut } from 'firebase/auth'
import { Route } from '../services/RoutingService'

const auth = getAuth(app)

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Login')
      })
      .catch(error => alert(error.message))
  }

  const handleExample = () => {
    navigation.navigate('Example')
  }

  const handleNavigateBottomDrawer = () => {
    navigation.navigate("Explore Bottom Drawer")
  }

  const handleExplore = () => {
    navigation.navigate("Explore Map");
  }

  const handleUpload = () => {
    navigation.navigate(Route.UPLOAD)
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleExample} style={styles.button}>
        <Text style={styles.buttonText}>CRUD Page</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleUpload} style={styles.button}>
        <Text style={styles.buttonText}>Upload Page</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavigateBottomDrawer} style={styles.button}>
        <Text style={styles.buttonText}>Explore Bottom Drawer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleExplore} style={styles.button}>
        <Text style={styles.buttonText}>Explore Map</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
