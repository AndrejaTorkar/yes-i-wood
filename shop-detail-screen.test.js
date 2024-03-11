// File formatted with Prettier
// ATorkar started writing code
import React from "react";
import { render } from "@testing-library/react-native";
import ShopDetailScreen from "./shop-detail-screen";

// Test the rendering of the shop detail screen
// RESOURCES: https://reactnative.dev/docs/testing
describe("ShopDetailScreen", () => {
  // Mock shop data
  const shopData = {
    name: "Example Shop",
    address: "123 Main St",
    description: "A description of the shop",
  };

  test("renders shop name, address, and description correctly", () => {
    // Render the shop detail screen with the shop data
    const { getByText } = render(
      <ShopDetailScreen route={{ params: shopData }} />
    );
    expect(getByText("Example Shop")).toBeTruthy();
    expect(getByText("123 Main St")).toBeTruthy();
    expect(getByText("A description of the shop")).toBeTruthy();
  });
});

// ATorkar finished writing code
