import React, { useState } from 'react';
import { View, Text, Button   } from 'react-native';
import style from '../styles/StartScreen';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartScreen = props => {
    return (
        <View style={style.screen}>
            
            <Text style={style.title}>Comenzar el juego</Text>

            <Card style={style.inputContainer}>  
            
                <Text>Seleccione un numero</Text>
                
                <Input 
                    style = {style.input} 
                    blurOnSumbit 
                    autoCapitalize = 'none' 
                    autoCorrect = { false }
                    keyboardType = "number-pad"
                    maxLength={2}
                    />
               
                 <View style={style.buttonContainer}>
                    
                    <View style={style.button}>
                     <Button title="Reiniciar" color={Colors.accent} onPress={() => {}} />
                    </View>

                    <View style={style.button}>
                    <Button title="Aceptar" color={Colors.primary} onPress={() => {}} />
                    </View>

                </View>

            </Card>

        </View>
    );
};

export default StartScreen;