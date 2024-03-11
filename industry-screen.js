// File formatted with Prettier
// ATorkar started writing code
// RESOURCES: https://www.coursera.org/learn/uol-cm3050-mobile-development

import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import CraftsmanData from "./craftsman-data";
import ShopCell from "./shop-cell";

// IndustryScreen is a functional component that takes a navigation and route prop
const IndustryScreen = ({ navigation, route }) => {
  // Extract the industry from the route params
  const { industry } = route.params;
  const industryData = CraftsmanData.find((data) => data.industry === industry);

  return (
    // Render the industry screen
    <View style={styles.industryContainer}>
      <Text style={styles.industryTitle}>{industry}</Text>
      <ScrollView>
        {industryData.shops.map((shop, index) => (
          <ShopCell key={index} navigation={navigation} {...shop} />
        ))}
      </ScrollView>
    </View>
  );
};

export default IndustryScreen;

// ATorkar finished writing code
