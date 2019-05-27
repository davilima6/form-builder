// @flow

/**
 * Utilitary functions
 *
 * @module utils
 * @example import { getSchemaFromApi } from 'utils';
 */

import CONFIG from '../config';
import { Field } from './types';

function getMinAgeMinDateFrom(now: Date): Date {
  const { min } = CONFIG.rules.age;
  const minDate = new Date(now.getTime());

  minDate.setFullYear(now.getFullYear() - min);

  return minDate;
}

async function getSchemaFromApi(): Promise<Array<Field>> {
  const { sampleResponse } = CONFIG.paths;
  const schema = await import(`../${sampleResponse}`);

  return schema;
}

function hasErrors(errors: { [string]: Array<Error> }): boolean {
  const hasErrored = Object.keys(errors).reduce(
    (hasError, fieldName) => hasError || errors[fieldName].length > 0,
    false,
  );

  return hasErrored;
}

function normalize(input: ?string) {
  const normalized = typeof input === 'string'
    ? input
      .trim()
      .toLowerCase()
      .split(' ')
      .join('-')
    : input;

  return normalized;
}

export {
  getMinAgeMinDateFrom, getSchemaFromApi, hasErrors, normalize,
};
