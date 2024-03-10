import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { styles } from "./styles";
import CraftsmanData from "./craftsman-data";

const LandingScreen = ({ navigation, loggedIn, username, setLoggedIn, setUsername  }) => {

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions here (clearing session, etc.)
    setLoggedIn(false); // Update loggedIn state
    setUsername(""); // Clear username
  };

  return (
    <ScrollView>
    <View style={styles.landingContainer}>
      {/* Display signed-in user information and logout button */}
      {loggedIn && (
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>Logged in as: {username}</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}

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
          onPress={() => navigation.navigate("Login", { setLoggedIn, username })}
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
    </ScrollView>
  );
};

export default LandingScreen;