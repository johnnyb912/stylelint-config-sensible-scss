# 2.0.0

- Update `stylelint` to `v15.0.2`
- Update `stylelint-order` to `v6.0.2`
- Added `stylelint-config-standard-scss v7.0.1` to dependencies
  - Extending [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss) adds the standard, sharable SCSS config for Stylelint
  - To see the rules that this config uses, please read the [config itself](https://github.com/stylelint-scss/stylelint-config-standard-scss/blob/main/index.js)
- Removed direct dependency on `stylelint-scss`
- Breaking change: Removed: `stylelint` less than `15.0.0` from peer dependencies
- Added `alpha-value-notation: number`
- Added `comment-no-empty: true`
- Added: `default` to ignoreAnnotations of `annotation-no-unknown`
- Added: `blockless-after-blockless` to ignore of `at-rule-empty-line-before`
- Added: `blockless-at-rules` and `pseudo-classes` to ignore of `max-nesting-depth`
- Added: `appearance` and `text-size-adjust` to ignore of `property-no-vendor-prefix`
- Added: `attribute` to ignore of `selector-no-qualifying-type`
- Added: `/^ng-/` to ignorePseudoElements of `selector-pseudo-element-no-unknown`
- Added: `camelCaseSvgKeywords: true` to `value-keyword-case`
- Added: `scss/at-each-key-value-single-line: true`
- Added: `scss/at-use-no-unnamespaced: true`
- Added: `scss/dimension-no-non-numeric-values: true`
- Added: `scss/dollar-variable-first-in-block: true`
  - ignore: `comments`, `imports`
  - except: `function`
- Added: `scss/dollar-variable-no-missing-interpolation: null`
- Added: `scss/function-color-relative: true`
  - severity: `warning`
  - message: `Use the built-in Sass scale-color method, https://sass-lang.com/documentation/modules/color#scale-color`
- Added missing properties to `order/properties-order`
- Added: `emptyLineBeforeUnspecified: threshold` to `order/properties-order`
- Added: `emptyLineMinimumPropertyThreshold: 3` to `order/properties-order`
- Removed redundant rules from `stylelint-config-standard-scss`
- Removed Stylelint [deprecated rules](https://stylelint.io/user-guide/rules#deprecated)

# 1.3.1

- Update `stylelint` to `v13.13.1`
- Update `stylelint-order` to `v4.1.0`
- Update `stylelint-scss` to `v3.21.0`

# 1.3.0

- Update `stylelint` to `v13.7.0`
- Update `stylelint-order` to `v4.0.0`
- Update deprecated rules: `*-blacklist` to `*-disallowed-list` and `*-whitelist` to `*-allowed-list`

# 1.2.2

- Update: `no-descending-specificity` to `null`

# 1.2.1

- Update `stylelint-scss` to `v3.18.0`

# 1.2.0

- Update `stylelint` to `v12.0.0`
- Update `stylelint-scss` to `v3.13.0`
- Update `stylelint-order` to `v3.1.1`

# 1.1.1

- Added: `media` and `include` to ignoreAtRules of  `at-rule-empty-line-before`

# 1.1.0

- Update `stylelint` to `v10.1.0`
- Update `stylelint-scss` to `v3.10.1`
- Update `stylelint-order` to `v3.1.0`
- Added: `keyframes` and `mixin` to ignoreAtRules of  `at-rule-empty-line-before`
- Added: `first-nested` exception to `scss/dollar-variable-empty-line-before`
- Update: `declaration-colon-space-after` to `always-single-line`
- Update: `font-family-name-quotes`: `always-unless-keyword`
- Update: `function-comma-space-after` to `always-single-line`
- Update: `function-parentheses-space-inside` to `never-single-line`
- Update: `indentation` to `4`
- Update: `selector-descendant-combinator-no-non-space` to `null`
- Update: `value-list-comma-space-after` to `always-single-line`
- Update: `max-nesting-depth`, `selector-max-id`, `selector-max-type` and `selector-no-qualifying-type` changed to report as warnings instead of errors
- Update: Property sort order

# 1.0.0

- Initial release
