import React from 'react';
import { View, Text, TextInput, Button   } from "react-native";
import style from '../styles/StartScreen';

const StartScreen = props => {
    return (
        <View style={style.screen}>
            <Text style={style.title}>Comenzar un nuevo juego!</Text>
            <View style={style.inputContainer}>
                <Text>Seleccione un numero</Text>
                <TextInput style={style.inputText}/>
                <View style={style.buttonContainer}>
                    
                    <View style={style.button}>
                        <Button title="Reiniciar" color='red' onPress={() => {}}/>
                    </View>
                    
                    <View style={style.button}>
                        <Button title="Confirmar" onPress={() => {}}/>
                    </View>

                </View>
            </View>
        </View>
    );
};

export default StartScreen;