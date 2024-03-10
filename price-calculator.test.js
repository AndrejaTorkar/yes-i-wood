import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PriceCalculator from './price-calculator';

describe('PriceCalculator', () => {
    test('renders all input fields and initial wood type', () => {
      const { getByPlaceholderText, getByText } = render(<PriceCalculator />);
      
      expect(getByPlaceholderText('Length (x) in mm')).toBeTruthy();
      expect(getByPlaceholderText('Width (y) in mm')).toBeTruthy();
      expect(getByPlaceholderText('Height (z) in mm')).toBeTruthy();
      expect(getByPlaceholderText('Number of pieces')).toBeTruthy();
      expect(getByText('Oak')).toBeTruthy(); // Initial wood type
    });
    
    test('calculates price correctly', () => {
      const { getByPlaceholderText, getByText } = render(<PriceCalculator />);
      
      fireEvent.changeText(getByPlaceholderText('Length (x) in mm'), '100');
      fireEvent.changeText(getByPlaceholderText('Width (y) in mm'), '50');
      fireEvent.changeText(getByPlaceholderText('Height (z) in mm'), '20');
      fireEvent.changeText(getByPlaceholderText('Number of pieces'), '5');
      
      fireEvent.press(getByText('Oak')); // Assuming the default selected wood is 'Oak'
      fireEvent.press(getByText('Cherry')); // Selecting a different wood type
      
      expect(getByText('Price: CHF 30000.00')).toBeTruthy(); // Assuming calculatePrice() returns 30000.00 for the given inputs
    });
  });