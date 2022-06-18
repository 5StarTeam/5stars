import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { globalStyles, greyColor, primaryColor, textColor } from '../../styles/global'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

const Comment = ({ comment, isModalComment }) => {
  const [isUpvoted, setIsUpvoted] = useState(comment.isUpvoted)
  const [isDownvoted, setIsDownvoted] = useState(comment.isDownvoted)
  const handleNavigateUser = user => {
    console.log('navigate user', user)
  }

  const handleUpvote = () => {
    setIsUpvoted(!isUpvoted)
    if (isDownvoted) {
      setIsDownvoted(!isDownvoted)
    }
  }

  const handleDownvote = () => {
    setIsDownvoted(!isDownvoted)
    if (isUpvoted) {
      setIsUpvoted(!isUpvoted)
    }
  }

  return (
    <View style={[styles.commentContainer, isModalComment && { borderBottomColor: '#000' }]}>
      <View style={styles.commentTopContainer}>
        <View style={styles.profilePicContainer}>
          <Pressable onPress={() => handleNavigateUser(comment.username)}>
            <Image source={{ uri: comment.profilePic }} style={styles.profilePicImg} />
          </Pressable>
          <View>
            <Text style={[styles.usernameText, isModalComment && { color: '#fff' }]}>{comment.username}</Text>
            <Text style={[globalStyles.greyText, isModalComment && { color: '#fff' }]}>{comment.date}</Text>
          </View>
        </View>
        <View style={styles.commentTopContainer}>
          <Pressable onPress={handleUpvote}>
            <Ionicons name="triangle" size={20} color={isUpvoted ? primaryColor : greyColor} />
          </Pressable>
          <Pressable onPress={handleDownvote}>
            <Ionicons name="triangle" size={20} color={isDownvoted ? primaryColor : greyColor} style={styles.down} />
          </Pressable>
        </View>
      </View>
      <Text style={[globalStyles.text, styles.commentText, isModalComment && { color: '#fff' }]}>
        {comment.comment}
      </Text>
    </View>
  )
}

export default Comment

const styles = StyleSheet.create({
  commentContainer: {
    marginBottom: 8,
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
  },
  commentTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  profilePicImg: {
    width: 45,
    height: 45,
    borderRadius: 23,
    marginRight: 10,
  },
  profilePicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernameText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: textColor,
    lineHeight: 24,
  },
  down: {
    marginLeft: 10,
    transform: [{ rotate: '180deg' }],
  },
  commentText: {
    marginTop: 8,
    marginBottom: 12,
  },
})
