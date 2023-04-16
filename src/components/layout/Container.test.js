import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Container from './Container';

it('render component', () => {
  render(<Container />)
  const element = screen.getByRole("main")
  expect(element).toBeInTheDocument()
})