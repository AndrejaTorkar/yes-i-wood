// File formatted with Prettier
// ATorkar started writing code
// RESOURCES: https://www.coursera.org/learn/uol-cm3050-mobile-development
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import { LoginScreen, SignupScreen } from "./login";
import IndustryScreen from "./industry-screen";
import LandingScreen from "./landing-screen";
import ShopDetailScreen from "./shop-detail-screen";
import PriceCalculator from "./price-calculator";

// App is a functional component that returns a NavigationContainer
const Stack = createStackNavigator();

export default function App() {
  // Set up state for the logged in status and username
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {}, []);

  return (
    // Return a SafeAreaView containing a NavigationContainer
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" options={{ title: "Industries" }}>
            {(props) => (
              <LandingScreen
                {...props}
                loggedIn={loggedIn}
                username={username}
                setLoggedIn={setLoggedIn}
                setUsername={setUsername}
              />
            )}
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
          <Stack.Screen name="Login" options={{ title: "Login" }}>
            {(props) => (
              <LoginScreen
                {...props}
                setLoggedIn={setLoggedIn}
                setUsername={setUsername}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ title: "Signup" }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaView>
  );
}

// ATorkar finished writing code
