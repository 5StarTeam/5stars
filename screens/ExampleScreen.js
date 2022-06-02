import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import app from '../core/Firebase';
import { getFirestore } from "firebase/firestore";

// We're performing CRUD on a single firestore document.
const exampleCollectionName = "ExampleCollection"
const exampleDocumentName = "ExampleDocument"
const ExampleScreen = () => {
    const db = getFirestore(app)
    const [exampleDoc, setExampleDoc] = useState(null)
    const [text, setText] = useState("")
    // MARK: Firestore v9 example CRUD functions
    // NOTE: Syntax has changed since v8
    const Create = () => {
        const exampleDoc = doc(db, exampleCollectionName, exampleDocumentName)
        const docData ={
            "string-field-1": "placeholder text",
            "num-field-1": 1,
            "read-me": "Hello World!",
        }
        setDoc(exampleDoc, docData)
        // NOTE: This is a promise (that's why you should use typescript, then its clear :] )
        .then(() => {
            alert("Document Created!")
        }).catch((error) => {
            alert((error.message))
        })
    }
    const Read = () => {
        // Read whatever document by changing the target collection and path here.
        // You can also read entire collections: https://firebase.google.com/docs/firestore/quickstart#read_data
        const exampleDoc = doc(db, exampleCollectionName, exampleDocumentName)

        getDoc(exampleDoc).then((snapshot) => {
            if (snapshot.exists) {
                setExampleDoc(snapshot.data())
            } else {
                alert("Document Not Found.")
            }
        }).catch((error) => {
            alert(error.message)
        })
    }
    const Update = (value, merge) => {
        const exampleDoc = doc(db, exampleCollectionName, exampleDocumentName)

        // If merge is true then it will merge with an existing doc, otherwise it will be a fresh one.
        setDoc(exampleDoc, value, {merge: merge}).then(() => {
            alert(("Updated Successfully!"))
            setText("")
        }).catch((error) => {
            alert(error.message)
        })
    }
    const Delete = () => {
        const exampleDoc = doc(db, exampleCollectionName, exampleDocumentName)

        deleteDoc(exampleDoc).then(() => {
            alert("Deleted Successfully!")
        }).catch((error) => {
            alert((error.message))
        })
    }
  return (
    <View style={styles.container}>
      <Button title='Create Example Doc' onPress={Create} />
      <Button title='Read Example Doc' onPress={Read} />
      {
        exampleDoc != null &&
        <Text>read-me: {exampleDoc["read-me"]}</Text> 
        // Another reason to use typescript: you can define the shape of the data and catch errors before runtime :)
      } 
      <TextInput placeholder='Type Here' 
        onChangeText={(text) => { setText(text) }}
        value={text} />
      <Button title='Update Example Doc' onPress={() => {
          Update({
              "read-me": text,
          }, true)
        }} disabled={text === ""} />
      <Button title='Delete Example Doc' onPress={Delete} />
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
});
  
export default ExampleScreen