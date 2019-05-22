import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import Form from './Form';

describe('Form', () => {
  let component;

  beforeEach(() => {
    cleanup();
    component = render(<Form />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
  });
});
