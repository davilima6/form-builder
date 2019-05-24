import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
// import 'jest-styled-components';
import Button from './Button';

describe('Button', () => {
  let component;

  beforeEach(() => {
    cleanup();
    component = render(<Button />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test.skip('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
    // expect(json).toHaveStyleRule('color', 'red');
  });
});
