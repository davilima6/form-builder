import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
// import 'jest-styled-components';
import FormSuccess from './FormSuccess';

describe('Form', () => {
  let component;

  beforeEach(() => {
    cleanup();
    window.scrollTo = () => {};
    component = render(
      <BrowserRouter>
        <FormSuccess />
      </BrowserRouter>,
    );
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test.skip('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
  });
});
