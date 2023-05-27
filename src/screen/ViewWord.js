import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'
import Video from 'react-native-video';

const ViewWord = () => {
  return (
    <View style={styles.container}>
      <Text style={{...styles.title,marginTop:'2%',color:'green'}}>Display  Word's  Screen</Text>

      <Text style={{...styles.title1,marginTop:'2%',marginRight:'60%'}}>Plant :</Text>
      <Text style={{...styles.meaning,marginTop:'2%',marginRight:'5%'}}>                         A living thing 
      that grows in earth, in water, usually has a stem, leaves,
        roots and flowers, and produces seeds.</Text>


        <Video
        source={require('D:/react-native-projects/KidsDictionary/src/Plant.mp3')}
        paused={true} // Set to false if you want the audio to play automatically
        style={styles.audioPlayer}
        controls={true}
      />

        <Image
        source={{ uri: 'https://www.collinsdictionary.com/images/full/plant_108417266.jpg' }}
        style={styles.image1}
      /> 
    </View>
  )
}

export default ViewWord


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 20,
      color: 'seagreen',
    },
    title1: {
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 0,
        color: 'seagreen',
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
  