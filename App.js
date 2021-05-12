import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./Screens/Splash";

import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import GameScreen from "./Screens/GameScreen";

const Stack = createStackNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true);
  }, 3000);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={loaded ? Home : Splash}
            options={
              loaded
                ? {}
                : {
                    headerShown: false,
                  }
            }
          />
          <Stack.Screen name="Profile" component={Profile} options={{}} />
          <Stack.Screen name="Game" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
