// @flow

/**
 * Utilitary functions
 *
 * @module utils
 * @example import { getSchemaFromApi } from 'utils';
 */

import CONFIG from '../config';
import { Field } from './types';

async function getSchemaFromApi(): Promise<Array<Field>> {
  const { sampleResponse } = CONFIG.paths;
  const schema = await import(`../${sampleResponse}`);

  return schema;
}

function normalize(input: ?string): string | mixed {
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
