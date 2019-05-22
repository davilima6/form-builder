/**
 * Module to hold application configuration.
 * @module config
 * @example import CONFIG from 'config';
 */

export default {
  paths: {
    appBase: __dirname,
    sampleResponse: 'sampleApiResponse.json',
  },
  enums: {
    gender: ['Female', 'Male', 'Non-Binary'],
  },
  rules: {
    age: {
      min: 18,
      max: 60,
    },
    text: {
      limit: 20,
    },
    email: {
      limit: 10,
      pattern: '@google.com',
    },
  },
};
