import React from 'react';
import { Text, View } from 'react-native';
import style from './styles/Main';
import Header from './components/Header';

export default function App() {

  return (
    <View style={style.screen}>
      <Header title='Adivinar un numero'/>
    </View>
  );

};



