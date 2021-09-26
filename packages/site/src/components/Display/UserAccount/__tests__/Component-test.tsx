import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from '..';

test('renders Test Component', () => {
  render(<Component title={"Test"}/>);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
