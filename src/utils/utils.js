/**
 * Utilitary functions
 *
 * @module utils
 * @example import { getSchemaFromApi } from 'utils';
 */

import { Field } from './types';

async function getSchemaFromApi(): Promise<Array<Field>> {
  const schema = await import('../sampleApiResponse.json');

  return schema;
}

function normalize(input: string): string {
  const normalized = typeof input === 'string'
    ? input
      .trim()
      .toLowerCase()
      .split(' ')
      .join('-')
    : input;

  return normalized;
}

export { getSchemaFromApi, normalize };
