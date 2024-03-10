import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { styles } from "./styles";
import CraftsmanData from "./craftsman-data";
import { LoginScreen, SignupScreen } from "./login";
import { field_width } from "./constants";
import { TableView, Section, Cell } from "react-native-tableview-simple";
import ShopCell from "./shop-cell";
import IndustryScreen from "./industry-screen";
import LandingScreen from "./landing-screen";
import ShopDetailScreen from "./shop-detail-screen";
import PriceCalculator from "./price-calculator";
import firebase from './firebase-config';

const Stack = createStackNavigator();


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        options={{ title: "Industries" }}
      >
        {props => <LandingScreen {...props} loggedIn={loggedIn} username={username} setLoggedIn={setLoggedIn} setUsername={setUsername} />}
      </Stack.Screen>
        <Stack.Screen
          name="Industry"
          component={IndustryScreen}
          options={({ route }) => ({ title: route.params.industry })}
        />
        <Stack.Screen
          name="ShopDetail"
          component={ShopDetailScreen}
          options={{ title: "Shop Detail" }}
        />
        <Stack.Screen
          name="PriceCalculator"
          component={PriceCalculator}
          options={{ title: "Price Calculator" }}
        />
        <Stack.Screen
          name="Login"
          options={{ title: "Login" }}
        >
          {props => <LoginScreen {...props} setLoggedIn={setLoggedIn} setUsername={setUsername} />}
        </Stack.Screen>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: "Signup" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


