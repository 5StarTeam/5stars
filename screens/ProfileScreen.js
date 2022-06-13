import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import ProfileTop from '../components/profile/ProfileTop'
import { globalStyles } from '../styles/global'
import SightsList from '../components/sightseeing/SightsList'
import { db } from '../core/Firebase'
import { collection, getDocs } from 'firebase/firestore'

const ProfileScreen = ({ route, navigation }) => {
  const [user, setUser] = useState(
    route.params?.initialUser ?? {
      username: 'Anya',
      profilePic:
        'https://i.guim.co.uk/img/media/97ef1652ca36d1c2e553628ffca8cf95e6d01c03/470_814_4479_2688/master/4479.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0db16315b50eb20f7325a1e8920afd08',
      points: 100,
      instagram: '@anya',
      achievements: [
        {
          badge: 'https://wallpaperaccess.com/full/4742613.jpg',
          title: '10 time twitcher',
        },
        {
          badge: 'https://wallpaperaccess.com/full/2500564.jpg',
          title: '5 time twitcher',
        },
        {
          badge: 'https://media.tenor.com/images/81374368721396bcbd460946c2baf594/raw',
          title: "I'm a twitcher",
        },
        {
          badge: 'https://www.itl.cat/pngfile/big/207-2078213_cute-the-angry-birds-movie-4k-wallpapers-desktop.jpg',
          title: 'purple bird',
        },
        {
          badge: 'https://wallpaperaccess.com/full/4742613.jpg',
          title: '10 time twitcher asdas',
        },
        {
          badge: 'https://wallpaperaccess.com/full/2500564.jpg',
          title: '5 time twitcher adasd',
        },
        {
          badge: 'https://media.tenor.com/images/81374368721396bcbd460946c2baf594/raw',
          title: "I'm a twitcher adsad",
        },
        {
          badge: 'https://www.itl.cat/pngfile/big/207-2078213_cute-the-angry-birds-movie-4k-wallpapers-desktop.jpg',
          title: 'purple bird adsad',
        },
      ],
    }
  )

  const [sightsData, setSightsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('FETCH DATA')
        const sightingsSnapshot = await getDocs(collection(db, 'birds'))
        let tempData = []
        sightingsSnapshot.forEach(doc => {
          tempData.push(doc.data())
        })

        setSightsData(tempData.sort((a, b) => b.rarityScore - a.rarityScore))
      } catch (err) {
        console.log('ERROR')
        console.log(err)
      }
    }
    fetchData()
    return () => {
      console.log('unmount ProfileScreen')
      setSightsData([])
    }
  }, [])

  useLayoutEffect(() => {
    // change the title of the page
    navigation.setOptions({
      title: user.username,
    })
  }, [navigation])

  return (
    <ScrollView style={globalStyles.containerStd}>
      <ProfileTop user={user} />
      <View>
        <Text style={globalStyles.title}>My Sightings</Text>
        <SightsList isHorizontalScroll={false} sightsData={sightsData} />
      </View>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
