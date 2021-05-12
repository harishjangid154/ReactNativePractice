import axios from "axios";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import Card from "../Componets/Card";
import main from "../UTILS/css/main";

const Home = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const checkEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleSubmit = () => {
    console.log(email, password);
    setErrors(null);
    let e = null;
    if (email.length === 0 && password.length === 0 && !checkEmail(email)) {
      setErrors("Invalid Credentials");
      e = true;
    }

    if (e === null) {
      axios({
        url: "http://9b7a5c91dfd9.ngrok.io/login",
        method: "POST",
        data: {
          email,
          password,
        },
      })
        .then((res) => res.data)
        .then((data) => {
          if (data.status === "ok") {
            navigation.navigate("Profile");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const updateEmail = (e) => {
    console.log(e, "email");
    setEmail(e);
  };
  const updatePassword = (e) => {
    setPassword(e);
  };
  return (
    <View style={{ ...main.screen, ...styles.main }}>
      <Text style={styles.login}> Login </Text>
      <Card styles={styles.card}>
        {errors ? (
          <>
            <Text style={styles.label}>{errors}</Text>
          </>
        ) : null}

        <Text style={styles.label}>Enter Email</Text>
        <TextInput
          style={main.input}
          underlineColorAndroid="gray"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={updateEmail}
        />
        <Text style={styles.label}>Enter Password</Text>
        <TextInput
          style={main.input}
          underlineColorAndroid="gray"
          placeholder="password"
          secureTextEntry={true}
          textContentType="password"
          onChangeText={updatePassword}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  login: {
    fontSize: 51,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default Home;
