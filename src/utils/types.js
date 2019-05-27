/**
 * Module to hold type definitions
 * @module types
 * @example import { Field } from 'types';
 */

export type Choice = string;

export type Error = string;

export type FieldType = 'date' | 'email' | 'number' | 'radio' | 'text';

export type Field = {
  label: string,
  type: FieldType,
};
