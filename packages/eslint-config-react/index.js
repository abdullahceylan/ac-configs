// Based on: https://github.com/facebook/create-react-app/tree/next/packages/eslint-config-react-app  	1

module.exports = {
  extends: ['@abdullahceylan/eslint-config'],

  plugins: ['jsx-a11y', 'react'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },

  rules: {
    // prohibit using shouldComponentUpdate in PureComponent
    'react/no-redundant-should-component-update': 'error',
    // prohibit using children as props
    'react/no-children-prop': 'error',
    // prohibit direct modification of this.state
    'react/no-direct-mutation-state': 'error',
    // prohibit spelling mistakes
    'react/no-typos': 'error',
    // prohibit using the string ref
    'react/no-string-refs': 'error',
    // prohibit unescaped >, ", ' or } inside the component
    'react/no-unescaped-entities': 'error',
    // prefer to create a component using ES6
    'react/prefer-es6-class': [
      'warn',
      'always'
    ],
    // forbids using another component's prop types unless they are explicitly imported/exported.
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    // prevent comment strings (e.g. beginning with // or /*) as a text node in JSX statements.
    'react/jsx-no-comment-textnodes': 'warn',
    // prevent duplicate properties in JSX
    'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
    // prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 'warn',
    // disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',
    // enforce PascalCase for user-defined JSX components 
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    // prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 'warn',
    // prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'warn',
    // prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 'warn',
    // prevent usage of deprecated methods
    'react/no-deprecated': 'warn',
    // prevent usage of isMounted
    'react/no-is-mounted': 'warn',
    // prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',
    // enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 'error',
    // enforce style prop value being an object
    'react/style-prop-object': 'warn',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref'],
      },
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',
  },
}
