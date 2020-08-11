import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import fileReader from './fileReader';

describe('<fileReader />', () => {
  test('it should mount', () => {
    render(<fileReader />);
    
    const fileReader = screen.getByTestId('fileReader');

    expect(fileReader).toBeInTheDocument();
  });
});