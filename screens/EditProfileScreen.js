import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Platform,
} from 'react-native'
import React, { useState } from 'react'

import RectButton from '../components/common/rectButton'
import { TextInput } from 'react-native-paper'
import { globalStyles, primaryColor, greyColor } from '../styles/global'
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons'

const user = {
  username: 'Anya',
  profilePic:
    'https://i.guim.co.uk/img/media/97ef1652ca36d1c2e553628ffca8cf95e6d01c03/470_814_4479_2688/master/4479.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0db16315b50eb20f7325a1e8920afd08',
  instagram: '@anya',
}

const EditProfileScreen = ({ navigation }) => {
  const [instagram, setInstagram] = useState(user.instagram)
  const submitSave = () => {
    Keyboard.dismiss()
    console.log('submitSave')
    navigation.navigate('Profile')
  }

  const handleChangeProfilePic = () => {
    console.log('handleChangeProfilePic')
  }

  return (
    <KeyboardAvoidingView
      style={globalStyles.profileSetupContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Pressable onPress={handleChangeProfilePic}>
            <Image source={{ uri: user.profilePic }} style={styles.profilePic} />
            <View style={styles.cameraIconWrapper}>
              <Entypo name="camera" size={18} color="white" />
            </View>
          </Pressable>
          <Text style={globalStyles.title}>{user.username}</Text>
          <View style={{ width: '100%' }}>
            <TextInput
              label="Instagram"
              mode="outlined"
              value={instagram}
              onChangeText={ig => setInstagram(ig)}
              style={styles.profileInput}
              activeOutlineColor={primaryColor}
              selectionColor={'#F9CEC8'}
              outlineColor={greyColor}
              placeholderTextColor={greyColor}
            />
          </View>
          <RectButton text={'Save'} handlePress={submitSave} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
  },
  profileInput: {
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 10,
    color: primaryColor,
  },
  cameraIconWrapper: {
    backgroundColor: '#515151',
    padding: 8,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
})
