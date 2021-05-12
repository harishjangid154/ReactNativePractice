import { StyleSheet } from "react-native";
import { primaryBackground } from "../color";

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: primaryBackground,
  },
  header: {
    height: 60,
  },
  input: {
    backgroundColor: "white",

    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
  },
});
