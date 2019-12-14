import React, {useState, useRef, useEffect} from 'react';
import { View, Text, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import style from '../styles/GameScreen';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  };

const GameScreen = props => {   
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );
    const [rounds, setRounds] = useState(0 );
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            props.onGameOver(rounds);
        }
    }, [ currentGuess, userChoice, onGameOver ] );

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)) {
                Alert.alert('No mientas!', 'Sabes que eso esta mal...', [
                    {text: 'Lo siento', style: 'cancel'}
                ]);
            return;
        }
        if (direction === 'lower'){
                currentHigh.current = currentGuess;  
        } else {
                currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess (nextNumber);
        setRounds(curRounds => curRounds + 1); 
    };   

    return (
        <View style={style.screen}>
            <Text>Los oponentes adivinan</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={style.buttonContainer}>

                <Button 
                title= 'Lower' 
                onPress= {nextGuessHandler.bind(this, 'lower')}
                />
                
                <Button 
                title= 'Grater' 
                onPress= {nextGuessHandler.bind(this, 'greater')} 
                />

            </Card>
        </View>
    );
};

export default GameScreen;