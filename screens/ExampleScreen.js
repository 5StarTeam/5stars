import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import firestore from "@react-native-firebase/firestore"

// We're performing CRUD on a single firestore document.
const exampleCollectionName = 'ExampleCollection'
const exampleDocumentName = 'ExampleDocument'
const ExampleScreen = () => {
  const ref = firestore().collection(exampleCollectionName).doc(exampleDocumentName)
  const [exampleDoc, setExampleDoc] = useState(null)
  const [text, setText] = useState('')
  // MARK: react-native-firebase/firestore v6 example CRUD functions
  const Create = () => {
    // Setting GeoPoint values, Base64 image string, or timestamp : https://rnfirebase.io/firestore/usage#field-values
    const docData = {
      'string-field-1': 'placeholder text',
      'num-field-1': 1,
      'read-me': 'Hello World!',
    }
    ref.set(docData)
      .then(() => {
        alert('Document Created!')
      }).catch(error => {
        alert(error.message)
      });
  }
  const Read = () => {
    // Can also listen to realtime changes: https://rnfirebase.io/firestore/usage#realtime-changes
    // Get nested data: https://rnfirebase.io/firestore/usage#documentsnapshot
    ref.get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setExampleDoc(documentSnapshot.data())
        }
      }).catch(error => {
        alert(error.message)
      });
  }
  const Update = (value) => {
    ref.update({ 'read-me': value })
      .then(() => {
        alert('Updated Successfully!')
        setText('')
      })
      .catch(error => {
        alert(error.message)
      })
  }
  const Delete = () => {
    ref.delete()
      .then(() => {
        alert('Deleted Successfully!')
      })
      .catch(error => {
        alert(error.message)
      })
  }
  return (
    <View style={styles.container}>
      <Button title="Create Example Doc" onPress={Create} />
      <Button title="Read Example Doc" onPress={Read} />
      {
        exampleDoc != null && <Text>read-me: {exampleDoc['read-me']}</Text>
        // Another reason to use typescript: you can define the shape of the data and catch errors before runtime :)
      }
      <TextInput
        placeholder="Type Here"
        onChangeText={text => {
          setText(text)
        }}
        value={text}
      />
      <Button
        title="Update Example Doc"
        onPress={() => {
          Update(text)
        }}
        disabled={text === ''}
      />
      <Button title="Delete Example Doc" onPress={Delete} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ExampleScreen
