import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
// import 'jest-styled-components';
import { getSchemaFromApi } from '../../utils';
import Form from './Form';

describe('Form', () => {
  let component;

  beforeEach(async () => {
    cleanup();
    const schema = (await getSchemaFromApi()).formSchema;

    component = render(<Form schema={schema} />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());

  test('matches snapshot', () => {
    const { asFragment } = component;

    expect(asFragment()).toMatchSnapshot();
  });
});
