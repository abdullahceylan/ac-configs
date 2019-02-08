module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier', 'stylelint-config-styled-components'],
  rules: {
    'no-descending-specificity': null,
    // When you use only custom font name as font-family value
    // e.g. font-family: Roboto
    'font-family-no-missing-generic-family-keyword': null,
    // to allow paddingVertical etc. on React Native
    'property-no-unknown': null,
    // to allow styled(Component)`` usage
    'block-no-empty': null,
    // to allow &:before or &:after usage
    'selector-pseudo-element-colon-notation': null,
    // we don't actually
    'comment-empty-line-before': null,
  },
};
