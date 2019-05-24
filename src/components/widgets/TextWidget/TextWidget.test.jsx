import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
// import 'jest-styled-components';
import TextWidget from './TextWidget';

describe('TextWidget', () => {
  let component;

  beforeEach(() => {
    const props = {
      label: 'First Name',
      type: 'text',
      data: 'John',
      errors: [],
      onChange: () => {},
    };

    cleanup();
    component = render(<TextWidget {...props} />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test.skip('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
    expect(asFragment()).toHaveStyleRule('background', '#fff');
  });
});
