import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

it('render component', () => {
  render(<Footer />)
  const element = screen.getAllByRole("listitem")
  expect(element.length).toBe(21)
})