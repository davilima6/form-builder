import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');

  act(() => {
    ReactDOM.render(<App />, div);
  });

  ReactDOM.unmountComponentAtNode(div);
});

test.skip('renders welcome message', () => {
  cleanup();
  const { getByText } = render(<App />);

  expect(getByText('Dynamic Form Builder')).toBeInTheDocument();
});
