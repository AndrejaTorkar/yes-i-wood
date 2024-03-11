// File formatted with Prettier
// ATorkar started writing code

import React from "react";
import { render } from "@testing-library/react-native";
import IndustryScreen from "./industry-screen";

// Mock the navigation prop
// RESOURCES: https://jestjs.io/docs/mock-functions
const navigation = {
  navigate: jest.fn(),
};

describe("IndustryScreen", () => {
  // Test the rendering of the industry screen
  it("should render the industry screen", () => {
    const route = {
      params: {
        industry: "Woodworking",
      },
    };
    const { getByText } = render(
      <IndustryScreen navigation={navigation} route={route} />
    );
    expect(getByText("Woodworking")).toBeTruthy();
  });
});

// ATorkar finished writing code
