import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import Form from './Form';

describe('Form', () => {
  let component;

  beforeEach(() => {
    component = render(<Form />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test('matches snapshot', () => {
    const component = renderer.create(<Form />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });
});
