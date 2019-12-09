import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import style from "../styles/Header";

const Header = props => {
    return (
        <View style={style.header}>
            <Text style={style.headerTitle}>
                {props.title}
            </Text>
        </View>
    );
};

export default Header;