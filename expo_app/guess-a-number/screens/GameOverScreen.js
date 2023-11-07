import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import Card from '../components/Card.js';
import TitleText from "../components/TitleText.js";
import BodyText from "../components/BodyText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over !</TitleText>
        <Card style={styles.cardContainer}>
        <Image
          source={require("../assets/success.jpg")}
          style= {styles.image}
          resizeMode='stretch'
        />
      </Card>
      <BodyText>Number of rounds = {props.numOfRounds} !!</BodyText>
      <BodyText>Number was {props.userNumber} !!!</BodyText>
      <Button title="New GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
      width: '60%',
      height: '30%',
  },
  image:{
      width: '100%',
      height: '100%'
  }
});

export default GameOverScreen;
