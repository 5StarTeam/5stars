import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Alert, Linking } from 'react-native'
import React, { useCallback } from 'react'
import { AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { globalStyles, greyColor, primaryColor } from '../../styles/global'

const windowWidth = Dimensions.get('window').width
const BirdDetailsTop = ({ sight }) => {
  const handleWiki = useCallback(async () => {
    try {
      // check if the link is supported for links with custom URL scheme
      // console.log(sight.wikiUrl)
      const supported = await Linking.canOpenURL(sight.wikiUrl)
      if (supported) {
        // Opening the link with some app, if the app is installed
        await Linking.openURL(sight.wikiUrl)
      }
    } catch (err) {
      Alert.alert('Error', 'Could not open the link')
      console.log(err)
    }
  }, [sight.wikiUrl])

  return (
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
            onPress={handleWiki}
          >
            <Text style={globalStyles.btnText}>Wiki Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[globalStyles.btnContainerSqAlt, { width: 'auto' }]} onPress={() => {}}>
            <FontAwesome5 name="directions" size={16} color={primaryColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default BirdDetailsTop

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
