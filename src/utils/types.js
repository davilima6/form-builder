/**
 * Module to hold type definitions
 * @module types
 * @example import { Field } from 'types';
 */

export type Choice = string;

export type Error = string;

export type Field = {
  label: string,
  type: 'date' | 'email' | 'number' | 'radio' | 'text',
};

export type FieldData = { [string]: string | number };
