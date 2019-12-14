import React, { useState } from 'react';
import { View } from 'react-native';
import style from './src/styles/Main';
import Header from './src/components/Header';
import StartScreen from './src/screens/StartScreen';
import GameScreen from './src/screens/GameScreen';
import GameOver from './src/screens/GameOver';
 
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState (0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartScreen onStartGame={startGameHandler}/>;

  if (userNumber && guessRounds <= 0) {
    content =  <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  } else if (guessRounds > 0) {
    content = <GameOver />;
  }
  
  return (
    <View style={style.screen}>
      <Header title='ADIVINA EL NUMERO'/>
      {content}
    </View>
  );

}