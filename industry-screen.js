import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import CraftsmanData from "./craftsman-data";
import ShopCell from "./shop-cell";

const IndustryScreen = ({ navigation, route }) => {
  const { industry } = route.params;
  const industryData = CraftsmanData.find((data) => data.industry === industry);

  return (
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