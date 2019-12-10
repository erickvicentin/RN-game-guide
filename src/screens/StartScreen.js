import React from 'react';
import { View, Text, TextInput, Button   } from 'react-native';
import style from '../styles/StartScreen';
import Card from '../components/Card';

const StartScreen = props => {
    return (
        <View style={style.screen}>
            <Text style={style.title}>'Pantalla comenzar'</Text>
            <Card style={style.inputContainer}>   
                <Text>Seleccione un numero</Text>
                <TextInput style={style.inputText} placeholder='Ingrese un numero'/>
                <View style={style.buttonContainer}>
                    
                    <View style={style.button}>
                     <Button title="Reiniciar" color='black' onPress={() => {}} />
                    </View>

                    <View style={style.button}>
                    <Button title="Aceptar" color='black' onPress={() => {}} />
                    </View>

                </View>
            </Card>
        </View>
    );
};

export default StartScreen;