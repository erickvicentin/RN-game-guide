import React from 'react';
import { View, Text } from "react-native";
import style from '../styles/NumberContainer';

const NumberContainer = props => {
    return (
    <View style={style.container}>
        <Text style={style.number}>{props.children}</Text>
    </View>        
    );
};

export default NumberContainer;