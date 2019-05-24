/**
 * Module to hold application configuration.
 * @module config
 * @example import CONFIG from 'config';
 */

const CONFIG = {
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
      min: 3,
      max: 10,
      domain: '@google.com',
    },
  },
};

CONFIG.rules.email.pattern = `.{${CONFIG.rules.email.min},${CONFIG.rules.email.max}}${
  CONFIG.rules.email.domain
}$`;

export default CONFIG;
