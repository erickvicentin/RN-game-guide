import React from 'react';
import { View, Text } from "react-native";
import style from '../styles/StartScreen';

const StartScreen = props => {
    return (
        <View style={style.screen}>
            <Text>
                The Game Screen!
            </Text>
        </View>
    );
};

export default StartScreen;