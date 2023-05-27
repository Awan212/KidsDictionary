import { StyleSheet, Text, View , Pressable } from 'react-native'
import React from 'react'

const ViewChildScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{...styles.title,marginTop:'2%',color:'green'}}>View Child Screen</Text>
      
      <View style={styles.container1} >
      <Text style={{...styles.title,marginTop:'2%',marginRight:'72%'}}>Yousuf  : 7</Text>

      <Pressable style={styles.button} onPress={()=>navigation.navigate('ViewWordScreen')}>
          <Text style={styles.buttonText}>Display</Text>
        </Pressable>
      <Pressable style={styles.button1} onPress={()=>navigation.navigate('assignWord')}>
          <Text style={styles.buttonText}>+</Text>
      </Pressable>
      </View>
      <View style={styles.container1}>
      <Text style={{...styles.title,marginRight:'65%'}}>Mustansar  : 4</Text>
      <Pressable style={styles.button} onPress={()=>navigation.navigate('ViewWordScreen')}>
          <Text style={styles.buttonText}>Display</Text>
      </Pressable>
      <Pressable style={styles.button1 } onPress={()=>navigation.navigate('assignWord')}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.container1}>
      <Text style={{...styles.title,marginRight:'69%'}}>Musfirah  : 2</Text>
      <Pressable style={styles.button } onPress={()=>navigation.navigate('ViewWordScreen')}>
          <Text style={styles.buttonText}>Display</Text>
      </Pressable>
      <Pressable style={styles.button1 } onPress={()=>navigation.navigate('assignWord')}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
   
  )
}

export default ViewChildScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
    },
    container1: {
       // This ensures the container takes up the available space
      borderWidth: 1, // Border width
      borderColor: 'black', // Border color
      padding: 5, // Padding around the container
      marginTop:'5%',
      borderStyle: 'solid', //
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: '1%',
      marginBottom: 30,
      color: 'seagreen',
    },
    buttonContainer: {
      alignItems:'center',
      marginTop:'25%'
    },
    button: {
      width:'90%',
      paddingVertical: '4%',
      paddingHorizontal:'6%',
      borderRadius: 100,
      backgroundColor: 'seagreen',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:'38%',
    },
    button1: {
      width:'90%',
      paddingVertical: '4%',
      paddingHorizontal:'6%',
      borderRadius: 100,
      backgroundColor: 'seagreen',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:'75%',
      marginTop:'-15%',

    },
    buttonText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
    },

  });
  