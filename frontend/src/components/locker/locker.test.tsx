import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import locker from './locker';

describe('<locker />', () => {
  test('it should mount', () => {
    render(<locker />);
    
    const locker = screen.getByTestId('locker');

    expect(locker).toBeInTheDocument();
  });
});