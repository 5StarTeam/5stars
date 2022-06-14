import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { globalStyles, placeholderColor, textColor } from '../styles/global'
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import RectButton from '../components/common/rectButton'
import SightingLocation from '../components/uploadSighting/SightingLocation'
import DescriptionTextarea from '../components/uploadSighting/DescriptionTextarea'
import BirdSelector from '../components/uploadSighting/BirdSelector'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('window').height
const sampleData = [
  {
    uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    uri: '',
  },
]
const UploadSightingScreen = () => {
  const [isSelectBird, setIsSelectBird] = useState(false)
  const [birdCount, setBirdCount] = useState(1)
  const [birdSelected, setBirdSelected] = useState('Select Bird')

  const handleIncrease = () => {
    setBirdCount(birdCount + 1)
  }
  const [description, setDescription] = useState('')

  const handleDecrease = () => {
    if (birdCount > 1) {
      setBirdCount(birdCount - 1)
    }
  }

  const handleChangeNum = text => {
    const num = parseInt(text.replace(/[^0-9]/g, ''))
    setBirdCount(num)
  }

  const handleSubmit = () => {
    console.log('submit upload sighting ')
  }

  const handleUploadImg = () => {
    console.log('upload img')
  }

  const renderImages = ({ item, index }) => {
    return (
      <View style={styles.imgContainer}>
        {index < 9 && item.uri ? (
          <Image source={{ uri: item.uri }} style={styles.uploadImg} />
        ) : (
          <Pressable style={styles.addImgWrapper} onPress={handleUploadImg}>
            <AntDesign name="plus" size={24} color={placeholderColor} />
          </Pressable>
        )}
      </View>
    )
  }

  return (
    <KeyboardAvoidingView style={globalStyles.containerStd} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          {isSelectBird && <BirdSelector birdSelected={birdSelected} setBirdSelected={setBirdSelected} />}
          <ScrollView style={{ height: screenHeight - 55 }} showsVerticalScrollIndicator={false}>
            {/*Select bird and count */}
            <View style={{ flex: 1 }}>
              <View style={styles.flexRow}>
                <Pressable style={styles.selectBirdWrapper} onPress={() => setIsSelectBird(!isSelectBird)}>
                  <MaterialCommunityIcons name="bird" size={24} color={placeholderColor} />
                  <Text style={styles.selectBirdText}>{birdSelected}</Text>
                  {isSelectBird ? (
                    <Octicons name="triangle-up" size={24} color={placeholderColor} style={styles.dropdownIcon} />
                  ) : (
                    <Octicons name="triangle-down" size={24} color={placeholderColor} style={styles.dropdownIcon} />
                  )}
                </Pressable>
                <View style={styles.selectCountWrapper}>
                  <View style={styles.numInputWrapper}>
                    <Entypo
                      name="minus"
                      size={24}
                      color={placeholderColor}
                      style={{ marginRight: 3 }}
                      onPress={handleDecrease}
                    />
                    <TextInput
                      keyboardType="number-pad"
                      style={styles.numInput}
                      onChangeText={handleChangeNum}
                      value={birdCount.toString()}
                    />
                    <Entypo
                      name="plus"
                      size={24}
                      color={placeholderColor}
                      style={{ marginLeft: 3 }}
                      onPress={handleIncrease}
                    />
                  </View>
                </View>
              </View>
            </View>

            {/* Describe textarea */}
            <DescriptionTextarea description={description} setDescription={setDescription} />

            {/* Location */}
            <SightingLocation location={'Location'} />

            {/* Image Container */}
            <FlatList
              data={sampleData}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderImages}
              style={{ marginTop: 10 }}
            />
          </ScrollView>

          {/* Upload button */}
          <View style={styles.btnWrapper}>
            <RectButton text={'UPLOAD'} handlePress={handleSubmit} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default UploadSightingScreen

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  selectBirdWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ECECEC',
    paddingVertical: 8,
    borderBottomWidth: 1,
    width: screenWidth - 150,
  },
  selectBirdText: {
    color: placeholderColor,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  numInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 5,
  },
  numInput: {
    borderWidth: 1,
    borderColor: placeholderColor,
    color: textColor,
    borderRadius: 12,
    width: 50,
    paddingVertical: 3,
    paddingHorizontal: 6,
    textAlign: 'center',
    fontWeight: '500',
  },
  btnWrapper: {
    width: '100%',
    height: 55,
  },
  imgContainer: {
    flex: 1,
    marginBottom: 3,
  },
  uploadImg: {
    width: (screenWidth - 40) / 3,
    height: (screenWidth - 40) / 3,
    borderRadius: 3,
  },
  addImgWrapper: {
    width: (screenWidth - 40) / 3,
    height: (screenWidth - 40) / 3,
    borderRadius: 3,
    borderColor: placeholderColor,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownIcon: {
    position: 'absolute',
    right: 5,
  },
})
