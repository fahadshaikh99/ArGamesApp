import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const windowWidth = Dimensions.get('window').width;


const Start_Screen = ({ navigation }) => {
    

    return(
        <ImageBackground source={require('../../assets/back.png')} style={styles.image}>
          <View style={{ marginTop: '20%'}}>
            <Text style={styles.text}>PLAY FREE{"\n"}AUGMENTED{"\n"}REALITY {"\n"}GAMES</Text>
          </View>
          <View style={{marginTop: '40%', marginRight: '30%', marginLeft: '5%'}}>
            <TouchableOpacity
                style={{  alignItems: "center", backgroundColor: "#D93823", padding: 10, borderRadius: 15}}
                onPress={() => navigation.navigate('HomeScreen')}
            >
              <Text style={{color: 'white', fontSize: 20, marginRight: 5}}>GET STARTED <AntDesign name="doubleright" size={24} color="white" /> </Text>
              
            </TouchableOpacity>
          </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    
    image: {
      flex: 1,
      resizeMode: "cover",
      
    },
    text: {
      fontSize: 48,
      fontWeight: "bold",
      marginLeft: '5%'
    }
  });
  


export default Start_Screen;