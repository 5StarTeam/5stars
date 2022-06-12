import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  Dimensions,
} from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../styles/global'
import { Entypo } from '@expo/vector-icons'
import Comment from './Comment'

const screenWidth = Dimensions.get('screen').width
const BirdDetailsGallery = ({ galleryImgs }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedImg, setSelectedImg] = useState({
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
  })

  const handlePressImage = img => {
    setModalVisible(true)
    setSelectedImg(img)
  }

  const renderGalleryImgs = () => {
    return galleryImgs.map((img, i) => (
      <TouchableOpacity onPress={() => handlePressImage(img)} key={i}>
        <Image source={{ uri: img.imgUrl }} style={styles.img} />
      </TouchableOpacity>
    ))
  }
  return (
    <View style={styles.galleryContainer}>
      <Text style={globalStyles.title}>Gallery</Text>
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {renderGalleryImgs()}
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modalContainer}>
          <Pressable onPress={() => setModalVisible(false)} style={styles.closeBtn}>
            <Entypo name="cross" size={32} color="white" />
          </Pressable>
          <Image source={{ uri: selectedImg.imgUrl }} style={styles.modalImg} />
        </View>
        <View style={styles.modalCommentContainer}>
          <Comment comment={selectedImg.comment} isModalComment={true} />
        </View>
      </Modal>
    </View>
  )
}

export default BirdDetailsGallery

const styles = StyleSheet.create({
  galleryContainer: {
    marginTop: 15,
  },
  img: {
    borderRadius: 12,
    width: 150,
    height: 150,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  closeBtn: {
    position: 'absolute',
    top: 12,
    left: 12,
  },
  modalImg: {
    width: screenWidth,
    height: screenWidth,
  },
  modalCommentContainer: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 15,
    paddingVertical: 0,
  },
})
