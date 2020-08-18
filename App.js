import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home_Screen from './src/Screens/Home_Screen';
import Game_Screen from './src/Screens/Game_Screen';
import Start_Screen from './src/Screens/Start_Screen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="StartScreen" component={Start_Screen}
          options={{ headerShown:false}}
        />
        <Stack.Screen name="HomeScreen" component={Home_Screen} 
          options={{ headerShown:false}}
        />
        <Stack.Screen name="Games" component={Game_Screen} 
         
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;