import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
// import 'jest-styled-components';
import RadioWidget from './RadioWidget';

describe('RadioWidget', () => {
  let component;

  beforeEach(() => {
    const props = {
      label: 'email',
      type: 'radio',
      choices: ['Male', 'Female', 'Non-Binary'],
      data: { id: 0 },
      errors: [],
      onChange: () => {},
    };

    cleanup();
    component = render(<RadioWidget {...props} />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test.skip('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
    expect(asFragment()).toHaveStyleRule('background', '#fff');
  });
});
