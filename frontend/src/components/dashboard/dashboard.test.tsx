import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import dashboard from './dashboard';

describe('<dashboard />', () => {
  test('it should mount', () => {
    render(<dashboard />);
    
    const dashboard = screen.getByTestId('dashboard');

    expect(dashboard).toBeInTheDocument();
  });
});