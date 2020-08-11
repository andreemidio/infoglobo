import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import sidebar from './sidebar';

describe('<sidebar />', () => {
  test('it should mount', () => {
    render(<sidebar />);
    
    const sidebar = screen.getByTestId('sidebar');

    expect(sidebar).toBeInTheDocument();
  });
});