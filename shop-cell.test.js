// File formatted with Prettier
// ATorkar started writing code
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ShopCell from "./shop-cell";

// RESOURCES: https://jestjs.io/docs/mock-functions
describe("ShopCell", () => {
  // Mock shop data
  const shopData = {
    name: "Example Shop",
    address: "123 Main St",
    description: "A description of the shop",
  };

  test("renders shop name and address correctly", () => {
    // Render the shop cell with the shop data
    const { getByText } = render(<ShopCell {...shopData} />);
    expect(getByText("Example Shop")).toBeTruthy();
    expect(getByText("123 Main St")).toBeTruthy();
  });

  // Test the navigation to the ShopDetail screen
  test("navigates to ShopDetail screen when pressed", () => {
    // Mock navigation prop
    const mockNavigate = jest.fn();
    const { getByText } = render(
      <ShopCell navigation={{ navigate: mockNavigate }} {...shopData} />
    );

    fireEvent.press(getByText("Example Shop"));
    expect(mockNavigate).toHaveBeenCalledWith("ShopDetail", {
      name: "Example Shop",
      address: "123 Main St",
      description: "A description of the shop",
    });
  });
});

// ATorkar finished writing code
