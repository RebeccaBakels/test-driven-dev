import { render, screen } from '@testing-library/react';
import Navbar from './component/Navbar';

test('renders learn react about the nav', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});