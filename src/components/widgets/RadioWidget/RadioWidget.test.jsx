import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import RadioWidget from './RadioWidget';

describe('RadioWidget', () => {
  let component;

  beforeEach(() => {
    const props = {
      label: 'email',
      type: 'radio',
      data: 'john@google.com',
      errors: [],
      onChange: () => {},
    };

    cleanup();
    component = render(<RadioWidget {...props} />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
    expect(asFragment()).toHaveStyleRule('background', '#fff');
  });
});
