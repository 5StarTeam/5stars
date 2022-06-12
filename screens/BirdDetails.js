import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { globalStyles, greyColor, primaryColor } from '../styles/global'
import { AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import RectButton from '../components/common/rectButton'
import RectButtonOutline from '../components/common/rectButtonOutline'

const windowWidth = Dimensions.get('window').width
const BirdDetails = ({ route, navigation }) => {
  const [sight, setSight] = useState({
    category: 'A',
    commonName: 'Chestnut-cheeked Starling',
    imageUrl: 'https://static.thainationalparks.com/img/species/wiki/2013/07/09/7841/sturnus-philippensis-w-900.jpg',
    localStatus: 'Very rare vagrant',
    rarity: 'Rarity',
    rarityScore: 15,
    wikiUrl: 'https://en.wikipedia.org/wiki/Chestnut-cheeked_Starling',
  })

  return (
    <View style={globalStyles.containerStd}>
      <View style={styles.shortDescContainer}>
        <Image source={{ uri: sight.imageUrl }} style={styles.img} />
        <View style={styles.shortDescWrapper}>
          <Text style={globalStyles.title}>{sight.commonName}</Text>
          <Text style={globalStyles.caption}>{sight.localStatus}</Text>
          <View style={styles.iconsWrapper}>
            <AntDesign name="eyeo" size={20} color={primaryColor} />
            <Text style={globalStyles.seenText}>12</Text>
            <Ionicons name="ios-time" size={20} color={greyColor} />
            <Text style={globalStyles.durationText}>spotted 10min ago</Text>
          </View>
          <View style={globalStyles.twoBtnContainer}>
            <TouchableOpacity
              style={[globalStyles.btnContainerSq, { width: '77%', marginRight: 5 }]}
              onPress={() => {}}
            >
              <Text style={globalStyles.btnText}>Wiki Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyles.btnContainerSqAlt, { width: 'auto' }]} onPress={() => {}}>
              <FontAwesome5 name="directions" size={16} color={primaryColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text>BirdDetails</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  shortDescContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  shortDescWrapper: {
    width: windowWidth - 190,
    height: 150,
    justifyContent: 'space-between',
  },
  img: {
    borderRadius: 12,
    width: 150,
    height: 150,
    marginRight: 10,
  },
  iconsWrapper: {
    flexDirection: 'row',
    marginTop: 5,
  },
  directionBtn: {
    padding: 12,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: primaryColor,
  },
})

export default BirdDetails
