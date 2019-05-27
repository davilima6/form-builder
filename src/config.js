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
    email: {
      domain: '@google.com',
      usernameMaxLength: 10,
    },
    text: {
      max: 20,
    },
  },
};

CONFIG.rules.email.max = CONFIG.rules.email.usernameMaxLength + CONFIG.rules.email.domain.length;
CONFIG.rules.email.pattern = `[\\w]+${CONFIG.rules.email.domain}$`;

export default CONFIG;
