import React, { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import style from '../styles/StartScreen';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import { parse } from 'qs';

const StartScreen = props => {

    const [enteredValue, setEnteredValue] = useState ('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState ();
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
            return;
        }
        setConfirmed(true);
        setSelectedNumber(enteredValue);
        setEnteredValue('');
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput= <Text>Chosen Number: {selectedNumber}</Text>
    };

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>    
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
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                        />
                
                    <View style={style.buttonContainer}>
                        
                        <View style={style.button}>
                        <Button title="Reiniciar" color={Colors.accent} onPress={() => {resetInputHandler()}} />
                        </View>

                        <View style={style.button}>
                        <Button title="Aceptar" color={Colors.primary} onPress={() => {confirmInputHandler()}} />
                        </View>

                    </View>

                </Card>
            {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default StartScreen;