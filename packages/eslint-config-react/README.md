# @abdullahceylan/eslint-config-react

ESLint React configurations that I've used.

# Install
`npm install --save-dev @abdullahceylan/eslint-config-react`

or 

`yarn add --dev @abdullahceylan/eslint-config-react`

# Usage
- Create `.eslintrc.js` folder into root directory
- Paste following:
  ```js
  module.exports = {
    parser: 'babel-eslint',
    extends: [
      '@abdullahceylan/eslint-config', // optional
      '@abdullahceylan/eslint-config-react',
    ],
    env: {
      es6: true,
    },
    rules: {
      // your own rules
    },
  };
  ```