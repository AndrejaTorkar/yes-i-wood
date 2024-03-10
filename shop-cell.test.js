import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ShopCell from './shop-cell';

describe('ShopCell', () => {
  const shopData = {
    name: 'Example Shop',
    address: '123 Main St',
    description: 'A description of the shop',
  };

  test('renders shop name and address correctly', () => {
    const { getByText } = render(<ShopCell {...shopData} />);
    expect(getByText('Example Shop')).toBeTruthy();
    expect(getByText('123 Main St')).toBeTruthy();
  });

  test('navigates to ShopDetail screen when pressed', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(
      <ShopCell navigation={{ navigate: mockNavigate }} {...shopData} />
    );

    fireEvent.press(getByText('Example Shop'));
    expect(mockNavigate).toHaveBeenCalledWith('ShopDetail', {
      name: 'Example Shop',
      address: '123 Main St',
      description: 'A description of the shop',
    });
  });
});