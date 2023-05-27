import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'


const ViewWordScreen = () => {
  return (
    <ScrollView style={styles.container1}>
      <View style={styles.container}>
      <Text style={{...styles.title,marginTop:'2%',color:'green'}}>Display  Word'S  Screen</Text>

      <Text style={{...styles.title1}}>Random : 3</Text>
      <Text style={{...styles.title1}}>School  :  2</Text> 
      <Text style={{...styles.title1}}>Market  :  3</Text> 
      <Text style={{...styles.title1}}>Tennis  :  1</Text> 
      <Text style={{...styles.title1}}>Nation  :  5</Text> 
      <Text style={{...styles.title1}}>Reason  :  3</Text> 
      <Text style={{...styles.title1}}>Appear  :  6</Text> 
      <Text style={{...styles.title1}}>Change  :  1</Text> 
      <Text style={{...styles.title1}}>Fabric  :  5</Text> 
      <Text style={{...styles.title1}}>Packed  :  7</Text> 
      <Text style={{...styles.title1}}>Almost  :  6</Text> 
      <Text style={{...styles.title1}}>Branch  :  2</Text> 
      <Text style={{...styles.title1}}>Qiblah  :  4</Text> 
      <Text style={{...styles.title1}}>Vacuum  :  6</Text> 
      <Text style={{...styles.title1}}>Zagged  :  7</Text>
      <Text style={{...styles.title1}}>Earbud  :  5</Text>
      <Text style={{...styles.title1}}>Fabric  :  3</Text>  
      <Text style={{...styles.title1}}>Belief  :  7</Text> 
      <Text style={{...styles.title1}}>Choose  :  4</Text> 
      <Text style={{...styles.title1}}>Flower  :  1</Text> 
      <Text style={{...styles.title1}}>Hammer  :  3</Text> 
      <Text style={{...styles.title1}}>Hacked  :  7</Text> 
      <Text style={{...styles.title1}}>Energy  :  2</Text> 
      <Text style={{...styles.title1}}>Labour  :  4</Text> 
      <Text style={{...styles.title1}}>Define  :  6</Text> 
      <Text style={{...styles.title1}}>Joker  :  1</Text> 
      <Text style={{...styles.title1}}>Macros  :  7</Text> 
      <Text style={{...styles.title1}}>Insect  :  2</Text> 
      <Text style={{...styles.title1}}>Noodle  :  1</Text> 
      <Text style={{...styles.title1}}>Kittie  :  2</Text> 
      <Text style={{...styles.title1}}>Sneaks  :  4</Text> 
      <Text style={{...styles.title1}}>Eraser  :  5</Text> 
      <Text style={{...styles.title1}}>Punish  :  4</Text> 
      <Text style={{...styles.title1}}>Elegant  :  6</Text> 
      <Text style={{...styles.title1}}>Oxygen  :  5</Text> 




    </View>
       
    </ScrollView>
  )
}

export default ViewWordScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      marginBottom:'5%'
    },
    container1: {
      flexGrow: 1,
      padding: 16,
      marginBottom:'5%'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: '15%',
      color: 'seagreen',
    },
    title1: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 0,
        color: 'seagreen',
        marginTop: '2%',
        marginRight:'60%',
        
      },
      meaning: {
        fontSize: 20,
        marginTop: 20,
        color: 'seagreen',
      },


    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },

    image1: {
        width: '80%',
        height: '50%',
      },
      image2: {
        marginTop: 35,
        width: '70%',
        height: '10%',
      },
      audioPlayer: {
        width: '80%',
        height: '20%',
      },
  });
  