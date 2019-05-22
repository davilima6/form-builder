/**
 * Module to hold type definitions
 * @module types
 * @example import { Field } from 'types';
 */

export type Field = {
  label: string,
  type: string,
  data?: Array<Object>,
  errors?: Array<Object>,
  onChange: Function,
};
