import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import CraftsmanData from "./craftsman-data";

const LandingScreen = ({ navigation }) => (
  <View style={styles.landingContainer}>
    <Text style={styles.landingTitle}>Select an Industry:</Text>
    <View style={styles.industryButtonGrid}>
        {CraftsmanData.map((data, index) => (
        <TouchableOpacity
            key={index}
            style={styles.industryButton}
            onPress={() =>
            navigation.navigate("Industry", { industry: data.industry })
            }
        >
            <Text style={styles.industryButtonText}>{data.industry}</Text>
        </TouchableOpacity>
        ))}
    </View>

    <View>
        <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate("PriceCalculator")}
            >
            <Text style={styles.buttonText}>Wood calculator</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.loginRow}>    
        <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
        >
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate("Signup")}
        >
        <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
  </View>
);

export default LandingScreen;