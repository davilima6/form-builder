import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
// import 'jest-styled-components';
import DateWidget from './DateWidget';

describe('DateWidget', () => {
  let component;

  beforeEach(() => {
    const props = {
      label: 'Date of Birth',
      type: 'text',
      data: new Date(0).getTime(),
      errors: [],
      onChange: () => {},
    };

    cleanup();
    component = render(<DateWidget {...props} />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test.skip('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
    expect(asFragment()).toHaveStyleRule('background', '#fff');
  });
});
