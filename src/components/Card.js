import React from 'react';
import { View } from 'react-native';
import style from '../styles/Card';

const Card = props => {
    return (
      <View style={{ ...style.card, ...props.style }}>{props.children}</View>
    );
  };


export default Card;