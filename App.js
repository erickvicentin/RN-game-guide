import React from 'react';
import { View } from 'react-native';
import style from './src/styles/Main';
import Header from './src/components/Header';
import StartScreen from './src/screens/StartScreen';

export default function App() {

  return (
    <View style={style.screen}>
      <Header title='Guess a Number Game'/>
      <StartScreen/>
    </View>
  );

}