import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global'
import Comment from './Comment'

const BirdDetailsComments = ({ comments }) => {
  return (
    <View style={{ marginTop: 15 }}>
      <Text style={globalStyles.title}>Where has it been</Text>
      {comments.map((comment, i) => (
        <Comment comment={comment} key={i} />
      ))}
    </View>
  )
}

export default BirdDetailsComments

const styles = StyleSheet.create({})
