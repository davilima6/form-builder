import fs from 'fs';
import {
  getMinAgeMinDateFrom, getSchemaFromApi, hasErrors, normalize,
} from './utils';
import CONFIG from '../config';

describe('utils', () => {
  test('getMinAgeMinDateFrom', () => {
    const expected = new Date('2001-05-26');
    const value = getMinAgeMinDateFrom(new Date('2019-05-26'));

    expect(expected.getFullYear()).toEqual(value.getFullYear());
    expect(expected.getMonth()).toEqual(value.getMonth());
    expect(expected.getDate()).toEqual(value.getDate());
  });

  test('getSchemaFromApi returns correctly', async () => {
    const path = `${CONFIG.paths.appBase}/${CONFIG.paths.sampleResponse}`;
    const rawData = fs.readFileSync(path);
    const expected = JSON.parse(rawData);
    const value = await getSchemaFromApi();

    expect(value).toMatchObject(expected);
  });

  test('hasErrors tracks emptyness of nested arrays', () => {
    const errors = {
      'field-1': [],
      'field-2': [],
    };

    expect(hasErrors(errors)).toBe(false);

    errors['field-3'] = ['One error here'];
    expect(hasErrors(errors)).toBe(true);

    errors['field-3'].pop();
    expect(hasErrors(errors)).toBe(false);

    errors['field-4'] = ['One error here', 'Another here'];
    expect(hasErrors(errors)).toBe(true);
  });

  test('normalize removes lowercases and replaces spaces by dashes', () => {
    const expected = 'date-of-birth';
    const value = normalize('Date of Birth');

    expect(value).toEqual(expected);
  });

  test('normalize returns input object if not string', () => {
    const expected = { abc: 1, cde: [1, 2, 3] };
    const value = normalize(expected);

    expect(value).toMatchObject(expected);
  });
});
