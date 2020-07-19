import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Anarchys Rainbow text', () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/Music/i)[0];
  expect(linkElement).toBeInTheDocument();
});
