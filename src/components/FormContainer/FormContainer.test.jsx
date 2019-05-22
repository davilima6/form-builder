import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import FormContainer from './FormContainer';

describe('Form', () => {
  let component;

  beforeEach(() => {
    cleanup();
    component = render(<FormContainer />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
    expect(component).toHaveStyleRule('display', 'flex');
  });
});
