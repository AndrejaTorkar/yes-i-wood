import React from "react";
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


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ title: "Industries" }}
        />
        <Stack.Screen
          name="Industry"
          component={IndustryScreen}
          options={({ route }) => ({ title: route.params.industry })}
        />
        <Stack.Screen name="ShopDetail" component={ShopDetailScreen} />
        <Stack.Screen name="PriceCalculator" component={PriceCalculator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


