import React from 'react';
import { Text, View } from 'react-native';
import style from '../styles/GameOver';

const GameOver = props => {
    return ( <View style = {style.screen}>
        <Text> The Game is Over! </Text>
    </View>
    )};

export default GameOver;