import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  FlatList,
} from 'react-native'
import React, { useState } from 'react'
import { captionColor, containerBgColor, globalStyles, inputBg } from '../../styles/global'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import SearchItem from './SearchItem'

const screenWidth = Dimensions.get('screen').width
const sampleData = [
  { commonName: 'Shikra' },
  { commonName: 'Shikra1' },
  { commonName: 'Shikra2' },
  { commonName: 'Shikra3' },
  { commonName: 'Bird' },
  { commonName: 'eagle' },
  { commonName: 'hawk' },
  { commonName: 'duck' },
  { commonName: 'goose' },
  { commonName: 'geese' },
  { commonName: 'swan' },
  { commonName: 'chicken' },
  { commonName: 'turkey' },
]

const SearchBar = () => {
  const navigation = useNavigation()
  const [searchInput, setSearchInput] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const handleFilter = value => {
    setSearchInput(value)
    const filteredData = sampleData.filter(d => d.commonName.toLowerCase().includes(value.toLowerCase()))

    if (value === '') {
      setFilteredData([])
    } else {
      setFilteredData(filteredData)
    }
  }

  /* <ScrollView style={[styles.searchResultContainer, { borderWidth: filteredData.length === 0 ? 0 : 0.5 }]}>
          {filteredData.map((item, i) => (
            <SearchItem key={item.commonName} item={item.commonName} />
          ))}
        </ScrollView> */

  const renderSearchItem = ({ item }) => {
    return <SearchItem item={item} />
  }

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
          onChangeText={handleFilter}
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
      {searchInput !== '' && (
        <TouchableWithoutFeedback onPress={() => setSearchInput('')}>
          <Entypo name="cross" size={19} color="#AE908C" style={styles.cancelIcon} />
        </TouchableWithoutFeedback>
      )}

      {searchInput !== '' && (
        /* <ScrollView style={[styles.searchResultContainer, { borderWidth: filteredData.length === 0 ? 0 : 0.5 }]}>
          {filteredData.map((item, i) => (
            <SearchItem key={item.commonName} item={item} />
          ))}
        </ScrollView> */
        <FlatList
          data={filteredData}
          keyExtractor={item => item.commonName}
          renderItem={renderSearchItem}
          // horizontal={true}
          // showsVerticalScrollIndicator={false}
          // showsHorizontalScrollIndicator={false}
          style={[styles.searchResultContainer, { borderWidth: filteredData.length === 0 ? 0 : 0.5 }]}
        />
      )}
      <FlatList
        data={sampleData}
        keyExtractor={item => item.commonName}
        renderItem={renderSearchItem}
        // horizontal={true}
        // showsVerticalScrollIndicator={false}
        // showsHorizontalScrollIndicator={false}
        style={[styles.searchResultContainer, { borderWidth: filteredData.length === 0 ? 0 : 0.5 }]}
      />
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
    zIndex: 9,
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
  cancelIcon: {
    // paddingVertical: 13,
    position: 'absolute',
    right: 40,
  },
  searchResultContainer: {
    height: 200,
    width: '100%',
    borderColor: inputBg,
    borderRadius: 15,
    position: 'absolute',
    top: 45,
    backgroundColor: containerBgColor,
    zIndex: 999,
  },
})
