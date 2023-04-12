import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

it('render component', () => {
  render(<Header />)
  const element = screen.getAllByRole("listitem")
  expect(element.length).toBe(5)
})