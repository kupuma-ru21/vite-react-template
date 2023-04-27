import { restrictPrefixOfArrowFunction } from './restrictPrefixOfArrowFunction';

module.exports = {
  rules: {
    'restrict-prefix-of-arrow-function': {
      create: restrictPrefixOfArrowFunction,
    },
  },
};
