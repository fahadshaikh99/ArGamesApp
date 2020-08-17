import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home_Screen from './src/Screens/Home_Screen';
import Game_Screen from './src/Screens/Game_Screen';

export default function App() {
  return (
    <Game_Screen />
   
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
