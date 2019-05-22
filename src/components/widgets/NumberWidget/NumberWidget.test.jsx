import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import NumberWidget from './NumberWidget';

describe('NumberWidget', () => {
  let component;

  beforeEach(() => {
    const props = {
      label: 'Age',
      type: 'number',
      data: 28,
      errors: [],
      onChange: () => {},
    };

    cleanup();
    component = render(<NumberWidget {...props} />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
    expect(asFragment()).toHaveStyleRule('background', '#fff');
  });
});
