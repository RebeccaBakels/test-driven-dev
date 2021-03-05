import { render, screen } from '@testing-library/react';
import App from './App';
import {calcTax, isOfAge} from './helpers'

test('check tax calc 1', () => {
  expect(calcTax(.10, 50.00)).toBe(5.0)
})
test('check if 18 fails drinking age', () => {
  expect(isOfAge(18)).toBe(false)
})
test('check if 45 fails drinking age', () => {
  expect(isOfAge(45)).toBe(true)
})
test('check if 21 fails drinking age', () => {
  expect(isOfAge(21)).toBe(true)
})
test('check if -99 fails drinking age', () => {
  expect(isOfAge(-99)).toBe(false)
})
test('check if xyz fails drinking age', () => {
  expect(isOfAge('xyz')).toBe(false)
})

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react about the nav', () => {
  render(<App />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});