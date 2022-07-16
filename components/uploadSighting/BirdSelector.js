import { StyleSheet, Text, View, Dimensions, TextInput, TouchableWithoutFeedback, FlatList } from 'react-native'
import React, { useState } from 'react'
import SearchItem from '../explore/SearchItem'
import { containerBgColor, globalStyles, inputBg } from '../../styles/global'
import { Entypo, Ionicons } from '@expo/vector-icons'

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

const BirdSelector = ({ setBirdSelected }) => {
  const [searchInput, setSearchInput] = useState('')
  const [filteredData, setFilteredData] = useState(sampleData)

  const handleFilter = value => {
    setSearchInput(value)
    const filteredData = sampleData.filter(d => d.commonName.toLowerCase().includes(value.toLowerCase()))

    if (value === '') {
      setFilteredData([])
    } else {
      setFilteredData(filteredData)
    }
  }

  const clearInput = () => {
    setSearchInput('')
    setFilteredData(sampleData)
  }

  const renderSearchItem = ({ item }) => {
    return <SearchItem item={item} handlePress={() => setBirdSelected(item.commonName)} />
  }

  return (
    <View style={styles.searchResultContainer}>
      <View style={styles.flexRow}>
        <TextInput
          autoCapitalize="none"
          placeholderTextColor="#AE908C"
          placeholder="Search here"
          value={searchInput}
          onChangeText={handleFilter}
          style={[globalStyles.text, { fontSize: 14 }]}
        />
        {searchInput === '' ? (
          <Ionicons name="search" size={18} color="#AE908C" />
        ) : (
          <TouchableWithoutFeedback onPress={clearInput}>
            <Entypo name="cross" size={19} color="#AE908C" />
          </TouchableWithoutFeedback>
        )}
      </View>
      {filteredData.length === 0 ? (
        <View style={styles.noDataPlaceholder}>
          <Text style={globalStyles.caption}>No Data Found</Text>
        </View>
      ) : (
        <FlatList data={filteredData} renderItem={renderSearchItem} keyExtractor={item => item.commonName} />
      )}
    </View>
  )
}

export default BirdSelector

const styles = StyleSheet.create({
  searchResultContainer: {
    height: 150,
    width: screenWidth - 150,
    borderColor: inputBg,
    borderRadius: 15,
    position: 'absolute',
    top: 45,
    backgroundColor: containerBgColor,
    zIndex: 3,
    shadowColor: 'rgba(166, 97, 85, 0.8)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 8,
    paddingVertical: 5,
    marginLeft: 3,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '95%',
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
  },
  noDataPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
})
