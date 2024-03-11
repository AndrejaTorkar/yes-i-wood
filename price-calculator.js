// File formatted with Prettier
// ATorkar started writing code
// RESOURCES: https://www.coursera.org/learn/uol-cm3050-mobile-development
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import background_calc from "./assets/background_calc.jpg";
import { styles } from "./styles";

// PriceCalculator is a functional component
const PriceCalculator = () => {
  // Declare state variables
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");
  const [numberOfPieces, setNumberOfPieces] = useState("");
  const [selectedWood, setSelectedWood] = useState("Oak");
  const [showOptions, setShowOptions] = useState(false);

  // Declare an array of wood types
  const woodTypes = ["Oak", "Maple", "Cherry", "Walnut"];

  // Declare a function to calculate the price
  const calculatePrice = () => {
    const woodPrices = {
      Oak: 0.05,
      Maple: 0.07,
      Cherry: 0.06,
      Walnut: 0.08,
    };

    // Calculate the volume, price per piece, and total price
    const volume = x * y * z;
    const pricePerPiece = volume * woodPrices[selectedWood];
    const totalPrice = pricePerPiece * numberOfPieces;
    validateInputs();
    return totalPrice.toFixed(2);
  };

  const validateInputs = () => {
    // Validate the inputs
    if (isNaN(x) || isNaN(y) || isNaN(z) || isNaN(numberOfPieces)) {
      Alert.alert("Error", "Dimensions must be numerical."); // Alert the user if the inputs are invalid
      return false;
    }
    return true;
  };
  // ATorkar finished writing code

  return (
    // Render the price calculator
    // ATorkar started writing code
    <ImageBackground
      source={background_calc}
      style={styles.backgroundCalcImage}
    >
      <View style={styles.calc_container}>
        <Text style={styles.calcTitle}>Price Calculator</Text>
        <TextInput
          style={styles.calcInput}
          placeholder="Length (x) in mm"
          keyboardType="numeric"
          value={x}
          onChangeText={(text) => setX(text)}
        />
        <TextInput
          style={styles.calcInput}
          placeholder="Width (y) in mm"
          keyboardType="numeric"
          value={y}
          onChangeText={(text) => setY(text)}
        />
        <TextInput
          style={styles.calcInput}
          placeholder="Height (z) in mm"
          keyboardType="numeric"
          value={z}
          onChangeText={(text) => setZ(text)}
        />
        <TextInput
          style={styles.calcInput}
          placeholder="Number of pieces"
          keyboardType="numeric"
          value={numberOfPieces}
          onChangeText={(text) => setNumberOfPieces(text)}
        />
        <View style={styles.dropdownCalcContainer}>
          <TouchableOpacity
            style={styles.calcDropdown}
            onPress={() => setShowOptions(!showOptions)}
          >
            <Text style={styles.dropdownCalcText}>{selectedWood}</Text>
          </TouchableOpacity>
          {showOptions && (
            <View style={styles.optionsCalcContainer}>
              {woodTypes.map((wood, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.calcOption}
                  onPress={() => {
                    setSelectedWood(wood);
                    setShowOptions(false);
                  }}
                >
                  <Text>{wood}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        <Text style={styles.priceCalcText}>Price: CHF {calculatePrice()}</Text>
      </View>
    </ImageBackground>
  );
};

export default PriceCalculator;
// ATorkar finished writing code
