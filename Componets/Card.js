import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { primaryBackground } from "../UTILS/color";

const Card = ({ styles, children }) => {
  return <View style={{ ...appStyle.container, ...styles }}>{children}</View>;
};

const appStyle = StyleSheet.create({
  container: {
    height: "auto",
    alignSelf: "flex-start",
    backgroundColor: primaryBackground,
    elevation: 5,
  },
});

export default Card;
