# @abdullahceylan/eslint-config

ESLint configurations that I've used.

# Usage
- Create `.eslintrc.js` folder into root directory
- Paste following:
  ```js
  module.exports = {
    parser: 'babel-eslint',
    extends: [
      require('@abdullahceylan/eslint-config'),
    ],
    env: {
      es6: true,
    },
    rules: {
      // your own rules
    },
  };
  ```