import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const ShopDetailScreen = ({ route }) => {
  const { name, address, description } = route.params;
  return (
    <View style={styles.shopDetailContainer}>
      <Text style={styles.shopName}>{name}</Text>
      <Text style={styles.shopAddress}>{address}</Text>
      <Text style={styles.shopDescription}>{description}</Text>
    </View>
  );
};

export default ShopDetailScreen;