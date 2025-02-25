import { render, screen } from '@testing-library/react';
import PhnApp from './PhnApp';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
