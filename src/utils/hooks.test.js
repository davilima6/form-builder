import { useForm, useScrollToTop } from './hooks';

describe.skip('custom hooks', () => {
  test('useForm', () => {
    const value = useForm();
    const expected = {
      schema: [{}, {}],
      errors: [],
      setErrors: () => {},
    };

    expect(value).toEqual(expected);
  });

  test('useScrollToTop', () => {
    const value = useScrollToTop();

    expect(value).toBeUndefined();
  });
});
