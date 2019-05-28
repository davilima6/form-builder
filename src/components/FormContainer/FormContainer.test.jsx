import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render } from 'react-testing-library';
// import 'jest-styled-components';
import 'jest-dom/extend-expect';
import FormContainer from './FormContainer';

window.scrollTo = jest.fn();

describe('Form', () => {
  let component;

  beforeEach(() => {
    cleanup();
    component = render(
      <BrowserRouter>
        <FormContainer />
      </BrowserRouter>,
    );
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
    // expect(component).toHaveStyleRule('display', 'flex');
  });
});
