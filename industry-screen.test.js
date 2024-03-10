import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import IndustryScreen from './industry-screen';

const navigation = {
  navigate: jest.fn(),
};

describe('IndustryScreen', () => {
    it('should render the industry screen', () => {
        const route = {
        params: {
            industry: 'Woodworking',
        },
        };
        const { getByText } = render(<IndustryScreen navigation={navigation} route={route} />);
        expect(getByText('Woodworking')).toBeTruthy();
    });
    
});