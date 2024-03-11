// File formatted with Prettier
// ATorkar started writing code
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "./App";
// aTorkar finished writing code

// Mock firebase initialization
// RESOURCES: https://jestjs.io/docs/mock-functions
jest.mock("./firebase-config", () => ({
  __esModule: true,
  default: jest.fn(),
}));

// ATorkar started writing code
describe("App", () => {
  // Test the initial rendering of the App component
  test("navigates to Industry screen", () => {
    const { getByText } = render(<App />);
    fireEvent.press(getByText("Industries"));
    expect(getByText("Industries")).toBeTruthy(); // Ensure the Industries screen is rendered
  });
});

// ATorkar finished writing code
