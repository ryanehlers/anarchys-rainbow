import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Anarchys Rainbow text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Anarchy's Rainbow/i);
  expect(linkElement).toBeInTheDocument();
});
