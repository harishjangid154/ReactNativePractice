import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import background from "../UTILS/images/background.jpg";
import forWord from "../UTILS/images/forword.jpg";
import main from "../UTILS/css/main";
const Splash = () => {
  return (
    <View style={main.screen}>
      <ImageBackground source={background} style={styles.background}>
        <Image source={forWord} style={styles.forword} />
        <Text style={styles.text}>This is THE GAME</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  forword: {
    height: 210,
    width: 210,
    borderRadius: 50,
  },
  text: {
    color: "yellow",
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default Splash;
