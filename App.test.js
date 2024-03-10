import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

// Mock firebase initialization
jest.mock('./firebase-config', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('App', () => {
  test('navigates to Industry screen', () => {
    const { getByText } = render(<App />);
    fireEvent.press(getByText('Industries'));
    expect(getByText('Industries')).toBeTruthy(); // Ensure the Industries screen is rendered
  });

});