import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from '..';

test('renders Test Component', () => {
  render(<Component />);
  const linkElement = screen.getByText(/Test Component/i);
  expect(linkElement).toBeInTheDocument();
});
