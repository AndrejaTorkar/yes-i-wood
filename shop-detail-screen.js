// File formatted with Prettier
// ATorkar started writing code
import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import wood6 from "./assets/wood6.jpg";

// ShopDetailScreen is a functional component that takes a route prop
// RESOURCES: https://www.coursera.org/learn/uol-cm3050-mobile-development
const ShopDetailScreen = ({ route }) => {
  // Extract the name, address, and description from the route params
  const { name, address, description } = route.params;
  return (
    // Render the shop details
    <View style={styles.shopDetailContainer}>
      <Text style={styles.shopName}>{name}</Text>
      <Text style={styles.shopAddress}>{address}</Text>
      <Text style={styles.shopDescription}>{description}</Text>
      <Image source={wood6} style={styles.shopImage} />
    </View>
  );
};

export default ShopDetailScreen;

// ATorkar finished writing code
