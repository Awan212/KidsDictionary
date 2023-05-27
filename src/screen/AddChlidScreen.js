import { TextInput,StyleSheet, Text, View,Pressable} from 'react-native'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'


const AddChlidScreen = () => {

  const grades = ["1", "2", "3", "4","5","6","7"]
  const [selectedGrade,setSelectedGrade] = useState(grades[0])

  return (
    <View style={styles.container}>

      <Text style={{...styles.title,marginTop:'2%',color:'green'}}>Add  Child  Screen</Text>


      <Text style={{...styles.title,marginTop:'12%',marginRight:'70%',color:'green'}}>Name : </Text>
      <TextInput  style={styles.input} placeholder="Enter Name Here" placeholderTextColor="#888"></TextInput>


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
          <Text style={styles.buttonText}>Save Child</Text>
        </Pressable>
       

      </View>
      



    </View>
  )
}

export default AddChlidScreen


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
    marginBottom: 30,
    color: 'seagreen',
  },
  buttonContainer: {
    alignItems:'center',
    marginTop:'16%'
  },
  button: {
    width:'90%',
    paddingVertical: 15,
    paddingHorizontal:'20%',
    borderRadius: 10,
    backgroundColor: 'seagreen',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
    borderWidth: 1,
    borderColor: 'gray',
    color: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
    width: 280,
    marginLeft: 50,
    marginBottom: 30,
   
  },
  
});
