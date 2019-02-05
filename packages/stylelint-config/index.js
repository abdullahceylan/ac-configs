module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-styled-components',
  ],
  rules: {
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'property-no-unknown': null,
    'block-no-empty': null,
  },
};
