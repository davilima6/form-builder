import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
// import 'jest-styled-components';
import Spinner from './Spinner';

describe('Spinner', () => {
  let component;

  beforeEach(() => {
    cleanup();
    component = render(<Spinner />);
  });

  test('renders with no props without crashing', () => {
    expect(component).toBeDefined();
  });

  test('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
  });
});
