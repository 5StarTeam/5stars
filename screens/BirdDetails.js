import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { globalStyles } from '../styles/global'
import BirdDetailsTop from '../components/birdDetails/BirdDetailsTop'
import BirdDetailsGallery from '../components/birdDetails/BirdDetailsGallery'
import BirdDetailsComments from '../components/birdDetails/BirdDetailsComments'
import RectButton from '../components/common/rectButton'

const BirdDetails = ({ route, navigation }) => {
  // useState(route.params.initialSight) is the data from bottom sheet where the sight card is clicked
  const [sight, setSight] = useState(
    route?.params?.initialSight ?? {
      category: 'A',
      commonName: 'Chestnut-cheeked Starling',
      imageUrl: 'https://static.thainationalparks.com/img/species/wiki/2013/07/09/7841/sturnus-philippensis-w-900.jpg',
      localStatus: 'Very rare vagrant',
      rarity: 'Rarity',
      rarityScore: 15,
      wikiUrl: 'https://en.wikipedia.org/wiki/Chestnut-cheeked_Starling',
    }
  )
  // const [sight, setSight] = useState({
  //   category: 'A',
  //   commonName: 'Chestnut-cheeked Starling',
  //   imageUrl: 'https://static.thainationalparks.com/img/species/wiki/2013/07/09/7841/sturnus-philippensis-w-900.jpg',
  //   localStatus: 'Very rare vagrant',
  //   rarity: 'Rarity',
  //   rarityScore: 15,
  //   wikiUrl: 'https://en.wikipedia.org/wiki/Chestnut-cheeked_Starling',
  // })

  const [galleryImgs, setGalleryImgs] = useState([
    {
      imgUrl: 'https://static.thainationalparks.com/img/species/wiki/2013/07/09/7841/sturnus-philippensis-w-900.jpg',
      comment: {
        username: 'Anya',
        comment: 'Shikra was spotted perching on a lamp post on the right of the path.',
        date: '2022-06-11',
        isUpvoted: true,
        isDownvoted: false,
        profilePic:
          'https://i.guim.co.uk/img/media/97ef1652ca36d1c2e553628ffca8cf95e6d01c03/470_814_4479_2688/master/4479.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0db16315b50eb20f7325a1e8920afd08',
      },
    },
    {
      imgUrl: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/158661541/1200',
      comment: {
        username: 'Anya',
        comment: 'Shikra was spotted perching on a lamp post on the right of the path.',
        date: '2022-06-11',
        isUpvoted: true,
        isDownvoted: false,
        profilePic:
          'https://i.guim.co.uk/img/media/97ef1652ca36d1c2e553628ffca8cf95e6d01c03/470_814_4479_2688/master/4479.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0db16315b50eb20f7325a1e8920afd08',
      },
    },
    {
      imgUrl: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/158661531/1800',
      comment: {
        username: 'Anya',
        comment: 'Shikra was spotted perching on a lamp post on the right of the path.',
        date: '2022-06-11',
        isUpvoted: true,
        isDownvoted: false,
        profilePic:
          'https://i.guim.co.uk/img/media/97ef1652ca36d1c2e553628ffca8cf95e6d01c03/470_814_4479_2688/master/4479.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0db16315b50eb20f7325a1e8920afd08',
      },
    },
    {
      imgUrl: 'https://i.pinimg.com/474x/93/2a/2c/932a2cfbbc8a3fcbcc83f443a447b0a6--small-island-bird-of-paradise.jpg',
      comment: {
        username: 'Anya',
        comment: 'Shikra was spotted perching on a lamp post on the right of the path.',
        date: '2022-06-11',
        isUpvoted: true,
        isDownvoted: false,
        profilePic:
          'https://i.guim.co.uk/img/media/97ef1652ca36d1c2e553628ffca8cf95e6d01c03/470_814_4479_2688/master/4479.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0db16315b50eb20f7325a1e8920afd08',
      },
    },
  ])

  const [comments, setComments] = useState([
    {
      username: 'Anya',
      comment: 'Shikra was spotted perching on a lamp post on the right of the path.',
      date: '2022-06-11',
      isUpvoted: true,
      isDownvoted: false,
      profilePic:
        'https://i.guim.co.uk/img/media/97ef1652ca36d1c2e553628ffca8cf95e6d01c03/470_814_4479_2688/master/4479.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0db16315b50eb20f7325a1e8920afd08',
    },
    {
      username: 'Jane Doe',
      comment: 'The bird was resting on a tall tree.',
      date: '2022-06-10',
      isUpvoted: false,
      isDownvoted: false,
      profilePic:
        'https://w0.peakpx.com/wallpaper/128/961/HD-wallpaper-note10-funny-ii-bird-birds-cartoon-little-thumbnail.jpg',
    },
    {
      username: 'John Doe',
      comment: 'The bird was resting on a very very tall tree.',
      date: '2022-06-09',
      isUpvoted: false,
      isDownvoted: true,
      profilePic: 'https://en.pimg.jp/056/575/464/1/56575464.jpg',
    },
    {
      username: 'John Doe',
      comment: 'The bird was resting on a very very tall tree.',
      date: '2022-06-09',
      isUpvoted: false,
      isDownvoted: true,
      profilePic: 'https://en.pimg.jp/056/575/464/1/56575464.jpg',
    },
  ])

  const handleReport = () => {
    console.log('report')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: sight.commonName,
    })
  }, [navigation])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={[globalStyles.containerStd, { marginBottom: 86 }]}>
        <BirdDetailsTop sight={sight} />
        <BirdDetailsGallery galleryImgs={galleryImgs} />
        <BirdDetailsComments comments={comments} />
      </ScrollView>
      <View style={[globalStyles.containerStd, styles.reportBtn]}>
        <RectButton text={'REPORT'} onPress={handleReport} colorVariant={'#D2513B'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  reportBtn: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
})

export default BirdDetails
