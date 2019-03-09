# @abdullahceylan/eslint-config-react-native

ESLint React Native configurations that I've used.

# Install
`npm install --save-dev @abdullahceylan/eslint-config-react-native`

or 

`yarn add --dev @abdullahceylan/eslint-config-react-native`

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