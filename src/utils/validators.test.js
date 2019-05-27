import {
  validateInRange, validateMinDate, validateMaxLength, validatePattern,
} from './validators';

describe('validators', () => {
  let value;

  beforeEach(() => {
    value = undefined;
  });

  test('validateInRange', () => {
    const min = 4;
    const max = 7;

    value = validateInRange(3, min, max);
    expect(value).toHaveLength(1);

    value = validateInRange(4, min, max);
    expect(value).toHaveLength(0);

    value = validateInRange(5, min, max);
    expect(value).toHaveLength(0);

    value = validateInRange(7, min, max);
    expect(value).toHaveLength(0);

    value = validateInRange(8, min, max);
    expect(value).toHaveLength(1);
  });

  test('validateMinDate', () => {
    const threshold = '2000-05-26';

    value = validateMinDate('1999-05-26', threshold);
    expect(value).toHaveLength(0);

    value = validateMinDate('2000-05-26', threshold);
    expect(value).toHaveLength(0);

    value = validateMinDate('2020-05-26', threshold);
    expect(value).toHaveLength(1);
  });

  test('validateMaxLength', () => {
    const threshold = 4;

    value = validateMaxLength('John', threshold);
    expect(value).toHaveLength(0);

    value = validateMaxLength('John Doe', threshold);
    expect(value).toHaveLength(1);
  });

  test('validatePattern', () => {
    const pattern = '[\\w]+@doe.com$';

    value = validatePattern('john@doe.com', pattern);
    expect(value).toHaveLength(0);

    value = validatePattern('john@doe.com.br', pattern);
    expect(value).toHaveLength(1);

    value = validatePattern('john@foo.com', pattern);
    expect(value).toHaveLength(1);
  });
});
