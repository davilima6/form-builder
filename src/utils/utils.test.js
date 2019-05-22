import fs from 'fs';
import { getSchemaFromApi, normalize } from './utils';
import CONFIG from '../config';

describe('utils', () => {
  test('getSchemaFromApi returns ', async () => {
    const rawData = fs.readFileSync(CONFIG.api.mockedResponse);
    const expected = JSON.parse(rawData);
    const value = await getSchemaFromApi();

    expect(value).toMatchObject(expected);
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
