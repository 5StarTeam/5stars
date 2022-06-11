import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { globalStyles } from '../../styles/global'

export default function SightCard({ handlePress, sight, isHorizontalScroll }) {
  // const imageSrc =
  //   attraction.imageUrls
  //     ? { uri: attraction.imageUrls }
  //     : { uri: "http://animal.memozee.com/ArchOLD-7/1197452567.jpg"}

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={isHorizontalScroll ? styles.sightCardScrollContainer : styles.sightCardContainer}>
        <View style={styles.seenWrapper}>
          <AntDesign name="eyeo" size={20} color="white" />
          <Text style={styles.seenText}>12</Text>
        </View>
        <Image
          source={{ uri: sight.imageUrl ?? 'http://animal.memozee.com/ArchOLD-7/1197452567.jpg' }}
          style={globalStyles.itineraryImageSmall}
        />
        <Text style={styles.sightBirdName}>{sight.commonName}</Text>
        <View style={styles.rarityTimeWrapper}>
          <Text style={styles.sightBirdLabel}>{sight.localStatus}</Text>
          <Text style={styles.sightBirdTime}>{sight.createdAt}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  sightCardContainer: {
    marginBottom: 12,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    borderRadius: 12,
    shadowColor: '#A66155',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    flexBasis: '48%',
  },
  sightCardScrollContainer: {
    marginBottom: 12,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    borderRadius: 12,
    shadowColor: '#A66155',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    // maxWidth: "48%",
    // flexBasis: "48%",
    width: 175,
    marginRight: 10,
  },
  sightBirdName: {
    color: '#68433D',
    paddingTop: 10,
    paddingHorizontal: 12,
    fontWeight: '500',
  },
  sightBirdLabel: {
    color: '#BD918A',
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 12,
  },
  sightBirdTime: {
    color: '#A3B3C5',
    fontSize: 10,
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 12,
  },
  rarityTimeWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  seenWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 2,
    borderRadius: 12,
    paddingHorizontal: 7,
    paddingVertical: 2,
    alignItems: 'center',
    right: 5,
    top: 5,
  },
  seenText: {
    color: 'white',
    paddingLeft: 2,
  },
})
