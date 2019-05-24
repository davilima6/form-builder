import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div,
  );

  ReactDOM.unmountComponentAtNode(div);
});

test('renders welcome message', () => {
  cleanup();
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  expect(getByText('Dynamic Form Builder')).toBeInTheDocument();
});
