import React from 'react';
import { render } from '@testing-library/react-native';
import ShopDetailScreen from './shop-detail-screen';

describe('ShopDetailScreen', () => {
  const shopData = {
    name: 'Example Shop',
    address: '123 Main St',
    description: 'A description of the shop',
  };

  test('renders shop name, address, and description correctly', () => {
    const { getByText } = render(<ShopDetailScreen route={{ params: shopData }} />);
    expect(getByText('Example Shop')).toBeTruthy();
    expect(getByText('123 Main St')).toBeTruthy();
    expect(getByText('A description of the shop')).toBeTruthy();
  });
});