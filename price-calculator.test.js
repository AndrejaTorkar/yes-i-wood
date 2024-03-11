// File formatted with Prettier
// ATorkar started writing code
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import PriceCalculator from "./price-calculator";

describe("PriceCalculator", () => {
  // Test the rendering of the PriceCalculator component
  // RESOURCES: https://reactnative.dev/docs/testing
  test("renders all input fields and initial wood type", () => {
    const { getByPlaceholderText, getByText } = render(<PriceCalculator />);

    expect(getByPlaceholderText("Length (x) in mm")).toBeTruthy();
    expect(getByPlaceholderText("Width (y) in mm")).toBeTruthy();
    expect(getByPlaceholderText("Height (z) in mm")).toBeTruthy();
    expect(getByPlaceholderText("Number of pieces")).toBeTruthy();
    expect(getByText("Oak")).toBeTruthy(); // Initial wood type
  });

  test("calculates price correctly", () => {
    // Render the PriceCalculator component
    const { getByPlaceholderText, getByText } = render(<PriceCalculator />);

    fireEvent.changeText(getByPlaceholderText("Length (x) in mm"), "100");
    fireEvent.changeText(getByPlaceholderText("Width (y) in mm"), "50");
    fireEvent.changeText(getByPlaceholderText("Height (z) in mm"), "20");
    fireEvent.changeText(getByPlaceholderText("Number of pieces"), "5");

    fireEvent.press(getByText("Oak"));
    fireEvent.press(getByText("Cherry"));

    expect(getByText("Price: CHF 30000.00")).toBeTruthy();
  });
});

// ATorkar finished writing code
