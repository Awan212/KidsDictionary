import { StyleSheet, Text,TextInput,Pressable, View ,Image} from 'react-native'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from 'react-native-document-picker'
import AudioPlayer from '../components/AudioPlayer'

const AddWordScreen = () => {

  const grades = ["1", "2", "3", "4","5","6","7"]
  const [selectedGrade,setSelectedGrade] = useState(grades[0])
  const [audiofn, setAudiofn] = React.useState('')
  const [audiourl, setAudiourl] = React.useState('')
  const [image, setImage] = React.useState('')

  const handleError = (err) => {
    if (isCancel(err)) {
      console.warn('cancelled')
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn('multiple pickers were opened, only the last will be considered')
    } else {
      throw err
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{...styles.title,marginTop:'2%',color:'green'}}>Add  Word  Screen</Text>
      <Text style={{...styles.title,marginTop:'5%',marginRight:'70%',color:'green'}}>Word : </Text>
      <TextInput  style={styles.input}
        placeholder="Type A Word " placeholderTextColor="gray"></TextInput>

      <Text style={{...styles.title,marginTop:'0%',marginRight:'65%',color:'green'}}>Meaning : </Text>
      <TextInput  style={styles.input}
        placeholder="Type Meaning " placeholderTextColor="gray"></TextInput>

     <Text style={{...styles.title,marginTop:'2%',marginRight:'70%',color:'green'}}>Image : </Text>
     <Pressable
        style={styles.button}
        onPress={() => {
          DocumentPicker.pick({
            allowMultiSelection: false,
            type: [types.images],
          })
            .then((value)=>{
              console.log('image',value);
            })
            .catch(handleError)
        }}
      >
        <Text style={styles.buttonText}>Select Image</Text>
      </Pressable>  

      <Text style={{...styles.title,marginTop:'2%',marginRight:'70%',color:'green'}}>Audio : </Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          DocumentPicker.pick({
            allowMultiSelection: false,
            type: [types.audio],
          })
            .then((value)=>{
              console.log('audio',value);
              setAudiofn(value[0].name)
              setAudiourl(value[0].uri+'/'+value[0].name)
            })
            .catch(handleError)
        }}
      >
        <Text style={styles.buttonText}>Select Audio</Text>
      </Pressable>
      
      <AudioPlayer setSelectedFile={setAudiourl} selectedFile={audiourl} />

 
      <Text style={{...styles.title,marginTop:'2%',marginRight:'70%',color:'green'}}>Grade : </Text>
      <SelectDropdown
        data={grades}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
          setSelectedGrade(selectedItem)
        }}
      />


     
      



      <View style={styles.buttonContainer}>
       <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Save Word</Text>
        </Pressable>
        </View>




    </View>
  )
}

export default AddWordScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 20,
      color: 'seagreen',
    },
    buttonContainer: {
      alignItems:'center',
      marginTop:'15%'
    },
    button: {
      width:'90%',
      paddingVertical: 15,
      paddingHorizontal:'20%',
      borderRadius: 10,
      backgroundColor: 'seagreen',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    input: {
      borderWidth: 2,
      borderColor: 'gray',
      color: 'black',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontSize: 20,
      width: 280,
      marginLeft: 50,
      marginBottom: 0,
    },
    image: {
        width: '40%',
        height: '8%',
        
      },
    
  });
  