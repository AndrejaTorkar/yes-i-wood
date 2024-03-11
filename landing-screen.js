// File formatted with Prettier
// ATorkar started writing code
// RESOURCES: https://www.coursera.org/learn/uol-cm3050-mobile-development

import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { styles } from "./styles";
import CraftsmanData from "./craftsman-data";

const LandingScreen = ({ navigation, loggedIn, username, setLoggedIn, setUsername  }) => {

  // Function to handle logout
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
  };

  return (
    // Return a ScrollView containing the landing screen
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

      <Text style={styles.logo}>YES, I WOOD</Text>

      <Text style={styles.landingTitle}>Find your Craftsman by Industry:</Text>
      <View style={styles.industryButtonGrid}>
      {CraftsmanData.map((data, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Industry", { industry: data.industry })}
            >
              <ImageBackground
                source={data.img}
                style={styles.industryButton}
                imageStyle={{ borderRadius: 10 }}
              >
                <Text style={styles.industryButtonText}>{data.industry}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
      </View>

      <View>
        <TouchableOpacity
          style={styles.calcButton}
          onPress={() => navigation.navigate("PriceCalculator")}
        >
          <Text style={styles.calcButtonText}>Wood calculator</Text>
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

// ATorkar finished writing code