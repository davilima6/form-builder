import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
// import 'jest-styled-components';
import EmailWidget from './EmailWidget';

describe('EmailWidget', () => {
  let component;

  beforeEach(() => {
    const props = {
      label: 'Date of Birth',
      type: 'text',
      data: 'john@google.com',
      errors: [],
      onChange: () => {},
    };

    cleanup();
    component = render(<EmailWidget {...props} />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
    // expect(asFragment()).toHaveStyleRule('background', '#fff');
  });
});
