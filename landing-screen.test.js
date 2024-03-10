import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LandingScreen from './landing-screen';

// Mock navigation prop
const navigation = {
  navigate: jest.fn(),
};

describe('LandingScreen', () => {
  test('renders without crashing', () => {
    render(<LandingScreen navigation={navigation} />);
  });

  test('renders logout button when user is logged in', () => {
    const { getByText } = render(
      <LandingScreen navigation={navigation} loggedIn={true} username="testUser" setLoggedIn={() => {}} setUsername={() => {}} />
    );
    expect(getByText('Logged in as: testUser')).toBeTruthy();
    expect(getByText('Logout')).toBeTruthy();
  });

  test('renders industry buttons', () => {
    const { getByText } = render(<LandingScreen navigation={navigation} />);
    expect(getByText('Select an Industry:')).toBeTruthy();
    expect(getByText('Woodworking')).toBeTruthy(); // Assuming 'Woodworking' is one of the industry names
  });

  test('renders "Wood calculator" button', () => {
    const { getByText } = render(<LandingScreen navigation={navigation} />);
    expect(getByText('Wood calculator')).toBeTruthy();
  });

  test('renders "Login" button', () => {
    const { getByText } = render(<LandingScreen navigation={navigation} />);
    expect(getByText('Login')).toBeTruthy();
  });

  test('renders "Sign Up" button', () => {
    const { getByText } = render(<LandingScreen navigation={navigation} />);
    expect(getByText('Sign Up')).toBeTruthy();
  });
});