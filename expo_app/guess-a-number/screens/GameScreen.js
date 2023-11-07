import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [curRounds, setGuessRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props
  useEffect(() => {
    if (currentGuess === userChoice){
      onGameOver(curRounds);
    }
  }, [currentGuess, userChoice, onGameOver])
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "upper" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong..", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNum = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNum);
    setGuessRounds(curRounds + 1);
  };
  return (
    <View style={styles.screen}>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")} />
        <Button title="UPPER" onPress={nextGuessHandler.bind(this, "upper")} />
      </Card>
      <Card style= {styles.actualNumContainer}>
        <Text> Your selected number! </Text>
        <NumberContainer>{userChoice}</NumberContainer>
      </Card>
      
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  actualNumContainer:{
    alignItems: "center",
    width: '70%',
    margin: 90
  }
});

export default GameScreen;
