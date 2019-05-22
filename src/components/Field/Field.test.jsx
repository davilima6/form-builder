import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Field from './Field';

describe('Field', () => {
  let component;

  beforeEach(() => {
    cleanup();
    component = render(<Field type="text" />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test('throws error if does not receive a valid type', () => {
    expect(() => {
      render(<Field />);
    }).toThrow();

    expect(() => {
      render(<Field type="invalid" />);
    }).toThrow();
  });
});
