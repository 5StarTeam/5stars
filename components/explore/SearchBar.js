import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { containerBgColor, globalStyles } from '../../styles/global'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const screenWidth = Dimensions.get('screen').width

const SearchBar = () => {
  const navigation = useNavigation()
  const [searchInput, setSearchInput] = useState('')

  return (
    <View style={styles.searchbarContainer}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.iconWrapper}>
          <Ionicons name="search" size={18} color="#AE908C" />
        </View>
        <TextInput
          autoCapitalize="none"
          placeholderTextColor="#AE908C"
          placeholder="Search for a bird"
          value={searchInput}
          onChangeText={value => setSearchInput(value)}
          style={[globalStyles.text, { fontSize: 14 }]}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.profilePicWrapper}>
        <Image
          source={{
            uri: 'https://i.guim.co.uk/img/media/97ef1652ca36d1c2e553628ffca8cf95e6d01c03/470_814_4479_2688/master/4479.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0db16315b50eb20f7325a1e8920afd08',
          }}
          style={styles.profilePic}
        />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchbarContainer: {
    flexDirection: 'row',
    backgroundColor: containerBgColor,
    width: screenWidth - 70,
    height: 40,
    borderRadius: 40,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'rgba(166, 97, 85, 0.8)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 8,
    marginRight: 10,
    zIndex: 3,
  },
  iconWrapper: {
    marginRight: 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 2,
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 30,
  },
  profilePicWrapper: {
    zIndex: 9,
    position: 'absolute',
    right: 5,
  },
})
