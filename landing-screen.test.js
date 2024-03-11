// File formatted with Prettier
// ATorkar started writing code
// RESOURCES: https://reactnative.dev/docs/testing
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LandingScreen from "./landing-screen";

// Mock navigation prop
const navigation = {
  navigate: jest.fn(),
};

describe("LandingScreen", () => {
  // Test the rendering of the landing screen
  test("renders without crashing", () => {
    render(<LandingScreen navigation={navigation} />);
  });

  test("renders logout button when user is logged in", () => {
    // Render the landing screen with a logged-in user
    const { getByText } = render(
      <LandingScreen
        navigation={navigation}
        loggedIn={true}
        username="testUser"
        setLoggedIn={() => {}}
        setUsername={() => {}}
      />
    );
    expect(getByText("Logged in as: testUser")).toBeTruthy();
    expect(getByText("Logout")).toBeTruthy();
  });

  test("renders industry buttons", () => {
    // Render the landing screen with industry buttons
    const { getByText } = render(<LandingScreen navigation={navigation} />);
    expect(getByText("Select an Industry:")).toBeTruthy();
    expect(getByText("Woodworking")).toBeTruthy(); // Assuming 'Woodworking' is one of the industry names
  });

  test('renders "Wood calculator" button', () => {
    // Render the landing screen with a "Wood calculator" button
    const { getByText } = render(<LandingScreen navigation={navigation} />);
    expect(getByText("Wood calculator")).toBeTruthy();
  });

  test('renders "Login" button', () => {
    //  Render the landing screen with a "Login" button
    const { getByText } = render(<LandingScreen navigation={navigation} />);
    expect(getByText("Login")).toBeTruthy();
  });

  test('renders "Sign Up" button', () => {
    // Render the landing screen with a "Sign Up" button
    const { getByText } = render(<LandingScreen navigation={navigation} />);
    expect(getByText("Sign Up")).toBeTruthy();
  });
});

// ATorkar finished writing code
