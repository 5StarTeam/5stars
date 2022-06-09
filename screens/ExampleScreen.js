import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { firestore as db } from "@react-native-firebase/firestore"

// We're performing CRUD on a single firestore document.
const exampleCollectionName = 'ExampleCollection'
const exampleDocumentName = 'ExampleDocument'
const exampleDocReference = db.collection(exampleCollectionName).doc(exampleDocumentName)
const ExampleScreen = () => {
  const [exampleDoc, setExampleDoc] = useState(null)
  const [text, setText] = useState('')
  // MARK: react-native-firebase/firestore v6 example CRUD functions
  const Create = () => {
    const docData = {
      'string-field-1': 'placeholder text',
      'num-field-1': 1,
      'read-me': 'Hello World!',
    }
    exampleDocReference.set(docData)
      // NOTE: This is a promise (that's why you should use typescript, then its clear :] )
      .then(() => {
        alert('Document Created!')
      })
      .catch(error => {
        alert(error.message)
      })
  }
  const Read = () => {
    // Read whatever document by changing the target collection and path here.
    // You can also read entire collections: https://firebase.google.com/docs/firestore/quickstart#read_data
    exampleDocReference.get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setExampleDoc(snapshot.data())
        } else {
          alert('Document Not Found.')
        }
      })
      .catch(error => {
        alert(error.message)
      })
  }
  const Update = (value, merge) => {
    exampleDocReference.set( value, { merge: merge })
    // If merge is true then it will merge with an existing doc, otherwise it will be a fresh one.
      .then(() => {
        alert('Updated Successfully!')
        setText('')
      })
      .catch(error => {
        alert(error.message)
      })
  }
  const Delete = () => {
    exampleDocReference.delete()
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
          Update(
            {
              'read-me': text,
            },
            true
          )
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
