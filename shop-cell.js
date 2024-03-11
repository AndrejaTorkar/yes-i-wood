// File formatted with Prettier
// ATorkar started writing code
// RESOURCES: https://www.coursera.org/learn/uol-cm3050-mobile-development
import React from "react";
import { TouchableOpacity, Text, View, ImageBackground } from "react-native";
import { styles } from "./styles";

// ShopCell is a functional component that takes a navigation, name, address, description, shop_img, and tags prop
const ShopCell = ({
  navigation,
  name,
  address,
  description,
  shop_img,
  tags,
}) => (
  // Return a TouchableOpacity containing the shop cell
  <TouchableOpacity
    onPress={() =>
      navigation.navigate("ShopDetail", { name, address, description })
    }
    style={styles.shopCellContainer}
  >
    <ImageBackground
      source={shop_img}
      style={styles.shopCellBackground}
      imageStyle={{ borderRadius: 10}}
    >
      <View style={styles.shopCellContent}>
        
        <Text style={styles.shopName}>{name}</Text>
        <Text style={styles.shopAddress}>{address}</Text>
        <View style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

export default ShopCell;
// ATorkar finished writing code
