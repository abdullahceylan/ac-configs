# @abdullahceylan/eslint-react-native-config

ESLint React Native configurations that I've used.

# Usage
- Create `.eslintrc.js` folder into root directory
- Paste following:
  ```js
  module.exports = {
    parser: 'babel-eslint',
    extends: [
      require('@abdullahceylan/eslint-config'), // optional
      require('@abdullahceylan/eslint-config-react-native'),
    ],
    env: {
      es6: true,
    },
    rules: {
      // your own rules
    },
  };
  ```