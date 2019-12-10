import React from 'react';
import { TextInput } from "react-native";
import style from '../styles/Input';

const Input = props =>  {
    return (
        <TextInput {...props} style = { { ...style.input, ...props.style } }/>
    );
};

export default Input;