// @flow
import { Error as TypeError } from '.';

const errorMessages: { [string]: Function } = {
  dateMin: min => `Date must be same or before ${new Date(min).toDateString()}`,
  isPristine: () => 'Form has not been filled out yet so it cannot be submitted',
  minMax: (min, max) => `Number is not within accepted range: from ${min} to ${max} (inclusive)`,
  max: max => `Maximum accepted value is ${max}`,
  maxLength: max => `Maximum text length is ${max} characters`,
  hasErrors: () => 'Some fields were not correctly filled',
  pattern: domain => `Input should match format: ${domain}`,
  required: () => 'This field is required',
};

function validateRequired(value: string): Array<TypeError> {
  const isValid = value !== '';

  return isValid ? [] : [errorMessages.required()];
}

function validateInRange(value: number, min: number, max: number): Array<TypeError> {
  const isValid = value ? min <= value && value <= max : false;

  return isValid ? [] : [errorMessages.minMax(min, max)];
}

function validateMinDate(value: Date, threshold: Date): Array<TypeError> {
  const isValid = value ? value <= threshold : false;

  return isValid ? [] : [errorMessages.dateMin(threshold)];
}

function validateMaxLength(value: string, threshold: number): Array<TypeError> {
  const isValid = value.length <= threshold;

  return isValid ? [] : [errorMessages.maxLength(threshold)];
}

function validatePattern(value: string, pattern: string, domain: string): Array<TypeError> {
  const isValid = value ? value.match(pattern) : false;

  return isValid ? [] : [errorMessages.pattern(domain)];
}

export {
  errorMessages,
  validateInRange,
  validateMinDate,
  validateMaxLength,
  validatePattern,
  validateRequired,
};
