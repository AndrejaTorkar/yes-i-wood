// File formatted with Prettier
// ATorkar started writing code
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Crypto from "expo-crypto";
import firebase from "./firebase-config";
import { styles } from "./styles";

// RESOURCES: https://www.coursera.org/learn/uol-cm3050-mobile-development
// RESOURCES: https://firebase.google.com/docs
// RESOURCES: https://docs.expo.dev/versions/latest/sdk/crypto/
// RESOURCES: https://docs.expo.dev/versions/latest/sdk/crypto/#cryptodigestalgorithm

// LoginScreen is a functional component that takes a navigation, setLoggedIn, and setUsername prop
const LoginScreen = ({ navigation, setLoggedIn, setUsername }) => {
  // Set up state for the email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handleLogin is an async function that checks the email and password against the database
  const handleLogin = async () => {
    try {
      // Check if the email exists in the database
      // ATorkar stopped writing code
      const emailExists = await firebase
        .database()
        .ref("CREDENTIALS")
        .orderByChild("email")
        .equalTo(email)
        .once("value");

      if (!emailExists.exists()) {
        // If the email doesn't exist, alert the user
        alert("Invalid email or password");
      } else {
        // If the email exists, check the password
        const userData = emailExists.val();
        const userKey = Object.keys(userData)[0];

        const hashedPasswordFromDatabase = userData[userKey].password; // Get the hashed password from the database
        const hashedPasswordEntered = await Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.SHA256, // Encrypt the password using Expo's Crypto module
          password
        );

        if (hashedPasswordFromDatabase === hashedPasswordEntered) {
          // If the password matches, set the logged-in status and username
          setLoggedIn(true);
          setUsername(email);
          // ATorkar started writing code
          navigation.navigate("Landing");
        } else {
          // If the password doesn't match, alert the user
          alert("Invalid email or password");
        }
      }
    } catch (error) {
      // If an error occurs, log the error and alert the user
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    // Render the login screen
    <View style={styles.loginPgContainer}>
      <Text style={styles.loginPgTitle}>Login</Text>
      <TextInput
        style={styles.loginPgInput}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.loginPgInput}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginPgButton} onPress={handleLogin}>
        <Text style={styles.loginPgButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginPgLink}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.loginPgLinkText}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const SignupScreen = ({ navigation }) => {
  // Set up state for the email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      // ATorkar stopped writing code
      // Encrypt the password using Expo's Crypto module
      const hashedPassword = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        password
      );

      // Save the email and hashed password to Firebase Realtime Database
      await firebase.database().ref("CREDENTIALS").push({
        email: email,
        password: hashedPassword,
      });

      navigation.navigate("Login");
    } catch (error) {
      // If an error occurs, log the error
    }
  };

  // ATorkar started writing code
  return (
    // Render the signup screen
    <View style={styles.loginPgContainer}>
      <Text style={styles.loginPgTitle}>Sign Up</Text>
      <TextInput
        style={styles.loginPgInput}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.loginPgInput}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginPgButton} onPress={handleSignup}>
        <Text style={styles.loginPgButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginPgLink}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginPgLinkText}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export { LoginScreen, SignupScreen };

// ATorkar finished writing code
