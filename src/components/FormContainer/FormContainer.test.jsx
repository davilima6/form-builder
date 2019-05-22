import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import FormContainer from './FormContainer';

describe('Form', () => {
  let component;

  beforeEach(() => {
    component = render(<FormContainer />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test('matches snapshot', () => {
    const component = renderer.create(<FormContainer />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });
});
