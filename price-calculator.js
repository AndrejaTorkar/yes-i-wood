import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PriceCalculator = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [z, setZ] = useState('');
  const [numberOfPieces, setNumberOfPieces] = useState('');
  const [selectedWood, setSelectedWood] = useState('Oak');
  const [showOptions, setShowOptions] = useState(false);

  const woodTypes = ['Oak', 'Maple', 'Cherry', 'Walnut'];

  const calculatePrice = () => {
    const woodPrices = {
      Oak: 0.05,
      Maple: 0.07,
      Cherry: 0.06,
      Walnut: 0.08,
    };

    const volume = x * y * z;
    const pricePerPiece = volume * woodPrices[selectedWood];
    const totalPrice = pricePerPiece * numberOfPieces;
    validateInputs();
    return totalPrice.toFixed(2);
  };

  const validateInputs = () => {
    if (isNaN(x) || isNaN(y) || isNaN(z) || isNaN(numberOfPieces)) {
      Alert.alert('Error', 'Dimensions must be numerical.');
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Length (x) in mm"
        keyboardType="numeric"
        value={x}
        onChangeText={(text) => setX(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Width (y) in mm"
        keyboardType="numeric"
        value={y}
        onChangeText={(text) => setY(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (z) in mm"
        keyboardType="numeric"
        value={z}
        onChangeText={(text) => setZ(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of pieces"
        keyboardType="numeric"
        value={numberOfPieces}
        onChangeText={(text) => setNumberOfPieces(text)}
      />
      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowOptions(!showOptions)}
        >
          <Text style={styles.dropdownText}>{selectedWood}</Text>
        </TouchableOpacity>
        {showOptions && (
          <View style={styles.optionsContainer}>
            {woodTypes.map((wood, index) => (
              <TouchableOpacity
                key={index}
                style={styles.option}
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
      <Text style={styles.priceText}>Price: CHF {calculatePrice()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dropdownContainer: {
    width: '100%',
    marginBottom: 10,
  },
  dropdown: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: 16,
  },
  optionsContainer: {
    width: '100%',
    position: 'absolute',
    top: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  calculateButton: {
    backgroundColor: '#2B3499',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PriceCalculator;