import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Container from './Container';

it('render component', () => {
  const {container} = render(<Container />)
  expect(container).toHaveTextContent('Container')
})