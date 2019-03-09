# @abdullahceylan/ac-configs

The linting & formatting configurations that I've used.

## packages/

### [ESlint](https://eslint.org/)

- [@abdullahceylan/eslint-config](packages/eslint-config)
- [@abdullahceylan/eslint-config-react](packages/eslint-config-react)
- [@abdullahceylan/eslint-config-react-native](packages/eslint-config-react-native)

#### Usage
- Create `.eslintrc.js` folder into root directory
- Paste following:
  ```js
  module.exports = {
    parser: 'babel-eslint',
    extends: [
      require('@abdullahceylan/eslint-config'),
      require('@abdullahceylan/eslint-config-react'), // optional
      require('@abdullahceylan/eslint-config-react-native'), // optional
    ],
    env: {
      es6: true,
    },
    rules: {
      // your own rules
    },
  };
  ```

### [Prettier](https://prettier.io/)

- [@abdullahceylan/prettier-config](packages/prettier-config)

#### Usage
- Create `.prettierrc.js` folder into root directory
- Add following line:
  - `module.exports = require('@abdullahceylan/prettier-config')`

### [StyleLint](https://stylelint.io)

- [@abdullahceylan/stylelint-config](packages/stylelint-config)

#### Usage
- Create `.stylelintrc.js` folder into root directory
- Add following line:
  - `module.exports = require('@abdullahceylan/stylelint-config')`