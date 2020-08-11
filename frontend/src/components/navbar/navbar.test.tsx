import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import navbar from './navbar';

describe('<navbar />', () => {
  test('it should mount', () => {
    render(<navbar />);
    
    const navbar = screen.getByTestId('navbar');

    expect(navbar).toBeInTheDocument();
  });
});