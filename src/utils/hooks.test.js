import { useForm } from './hooks';

describe.skip('custom hooks', () => {
  test('useForm', () => {
    const value = useForm();
    const expected = {
      schema: [{}, {}],
      errors: [],
    };

    expect(value).toEqual(expected);
  });
});
