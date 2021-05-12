import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NumberContainer from "../Componets/NumberContainer";
import Card from "../Componets/Card";

const generateRondomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const GameScreen = (props) => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [guesses, setGuesses] = useState(1);
  const [showWinning, setShowWinning] = useState(false);
  const [showLosing, setShowLosing] = useState(false);
  const [currentGuess, setCurrentGuess] = useState(
    generateRondomBetween(min, max)
  );

  const lowerHandler = (m) => {
    setCurrentGuess(generateRondomBetween(m, max));
    setMin(m);
    setGuesses((pre) => pre + 1);
  };

  const greaterHandler = (m) => {
    setCurrentGuess(generateRondomBetween(min, m));
    setMax(m);
    setGuesses((pre) => pre + 1);
  };
  const winningScreen = (
    <Card styles={styles.card}>
      <Text style={styles.text}>Guessed In</Text>
      <NumberContainer>{guesses}</NumberContainer>
      <Text style={styles.text}>Guesses</Text>
    </Card>
  );

  const loseScreen = (
    <Card styles={styles.card}>
      <Text style={styles.text}>Failed To Guess</Text>
    </Card>
  );

  useEffect(() => {
    console.log(guesses, props.route.params.number);
    if (props.route.params.number === currentGuess) {
      console.log("Computer Guessed");
      setShowWinning(true);
    } else if (guesses >= 10) {
      console.log(guesses, "unable");
      setShowLosing(true);
    }
  }, [guesses]);
  return (
    <View style={styles.screen}>
      <Card styles={styles.card}>
        <Text style={styles.text}>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        {!showWinning && !showLosing && (
          <View style={styles.buttonContainer}>
            <Button title="Lower" onPress={() => lowerHandler(currentGuess)} />
            <Button
              title="Greater"
              onPress={() => greaterHandler(currentGuess)}
            />
          </View>
        )}

        {showWinning && winningScreen}
        {showLosing && loseScreen}
      </Card>
      <View style={styles.button}>
        <Button
          title="Re Start Game"
          onPress={() => props.navigation.navigate("Profile")}
        />
      </View>
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
    alignSelf: "center",
  },
  button: {
    width: 150,
    padding: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 22,
    textAlign: "center",
  },
  card: {
    alignSelf: "center",
    padding: 30,
    borderRadius: 10,
  },
});

export default GameScreen;
