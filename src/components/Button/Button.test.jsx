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

  test('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot for disabled state', () => {
    component = render(<Button disabled />);
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
  });
});
