# stylelint-config-sensible-scss

> The sharable Scss config for Stylelint with sensible defaults

## Installation

```
$ npm install --save-dev stylelint-config-sensible-scss
```

## Usage

Set your Stylelint config to:

```
{
    "extends": "stylelint-config-sensible-scss"
}
```

### Extending the config

Add a `"rules"` key to your config and add your overrides there.

To change `color-hex-length` to `"long"`, turn off the `block-no-empty` rule and add the `unit-whitelist` rule:

```
{
    "extends": "stylelint-config-sensible-scss",
    "rules": {
        "block-no-empty": null,
        "color-hex-length": "long",
        "unit-whitelist": ["em", "rem"]
    }
}
```

## Documentation

### Plugins

* [`stylelint-order`](https://github.com/hudochenkov/stylelint-order): A plugin pack of order related linting rules for stylelint.
* [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss): A collection of SCSS specific linting rules for stylelint

### Configured lints

This is a list of the lints turned on in this configuration, and what they do.

#### At-rule

* [`at-rule-blacklist`](http://stylelint.io/user-guide/rules/at-rule-blacklist/): Specify a blacklist of disallowed at-rules.
  * `"debug"` Disallow the use of `@debug`.
* [`at-rule-no-vendor-prefix`](http://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/): Disallow vendor prefixes for at-rules, prefer to use Autoprefixer for adding relevent prefixes.

#### Block

* [`block-no-empty`](http://stylelint.io/user-guide/rules/block-no-empty/): Disallow empty blocks.
* [`block-opening-brace-space-before`](http://stylelint.io/user-guide/rules/block-opening-brace-space-before/): There must always be a single space before the opening brace.

#### Color

* [`color-hex-case`](http://stylelint.io/user-guide/rules/color-hex-case/): Hex colors must be written in lowercase.
* [`color-hex-length`](http://stylelint.io/user-guide/rules/color-hex-length/): Always use short hex notation, where available.
* [`color-named`](http://stylelint.io/user-guide/rules/color-named/): Colors must never be named.
* [`color-no-invalid-hex`](http://stylelint.io/user-guide/rules/color-no-invalid-hex/): Hex values must be valid.

#### Comments
* [`comment-empty-line-before`](http://stylelint.io/user-guide/rules/comment-empty-line-before) : There must always be an empty line before comments. _Except_: `first-nested`. _Ignore_: `stylelint-commands`.

#### Declaration

* [`declaration-bang-space-after`](http://stylelint.io/user-guide/rules/declaration-bang-space-after/): There must never be whitespace after the bang.
* [`declaration-bang-space-before`](http://stylelint.io/user-guide/rules/declaration-bang-space-before/): There must always be a single space before the bang.
* [`declaration-colon-space-after`](http://stylelint.io/user-guide/rules/declaration-colon-space-after/): There must always be a single space after the colon.
* [`declaration-colon-space-before`](http://stylelint.io/user-guide/rules/declaration-colon-space-before/): There must never be whitespace before the colon.

#### Declaration block

* [`declaration-block-semicolon-newline-after`](http://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/): There must always be a newline after the semicolon in multi-line declarations.
* [`declaration-block-semicolon-space-before`](http://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/): There must never be whitespace before the semicolons.
* [`declaration-block-single-line-max-declarations`](http://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/): There should never be more than `1` declaration per line.
* [`declaration-block-trailing-semicolon`](http://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/): There must always be a trailing semicolon.

#### Declaration Property

* [`declaration-property-value-blacklist`](http://stylelint.io/user-guide/rules/declaration-property-value-blacklist/): Specify a blacklist of disallowed property and value pairs within declarations.
  * `^border`: Disallow the use of the word `none` for borders, use `0` instead.

#### Function

* [`function-comma-space-after`](http://stylelint.io/user-guide/rules/function-comma-space-after/): There must always be a single space after the commas in single-line functions.
* [`function-parentheses-space-inside`](http://stylelint.io/user-guide/rules/function-parentheses-space-inside/): There must never be whitespace on the inside of the parentheses of functions.
* [`function-url-quotes`](http://stylelint.io/user-guide/rules/function-url-quotes/): URLs must always be quoted.

#### General

* [`indentation`](http://stylelint.io/user-guide/rules/indentation/): Indentation should always be `4` spaces.
* [`length-zero-no-unit`](http://stylelint.io/user-guide/rules/length-zero-no-unit/): Disallow units for zero lengths.
* [`max-nesting-depth`](http://stylelint.io/user-guide/rules/max-nesting-depth/): Limit the allowed nesting depth to `4`.
* [`no-missing-end-of-source-newline`](http://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/): Disallow missing end-of-source newlines in non-empty files.

#### Media Feature

* [`media-feature-name-no-vendor-prefix`](http://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/): Disallow vendor prefixes for media feature names.

#### Number

* [`number-leading-zero`](http://stylelint.io/user-guide/rules/number-leading-zero/): There must always be a leading zero.
* [`number-no-trailing-zeros`](http://stylelint.io/user-guide/rules/number-no-trailing-zeros/): Disallow trailing zeros in numbers.

#### Property

* [`property-no-vendor-prefix`](http://stylelint.io/user-guide/rules/property-no-vendor-prefix/): Disallow vendor prefixes for properties.
* [`shorthand-property-no-redundant-values`](http://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/): Disallow redundant values in shorthand properties.


#### Rule

* [`rule-empty-line-before`](http://stylelint.io/user-guide/rules/rule-empty-line-before/): There must always be an empty line before multi-line rules. _Except_: Nested rules that are the first of their parent rule. _Except_: Rules that come after a comment and first nested rules.

#### Selector

* [`selector-class-pattern`](http://stylelint.io/user-guide/rules/selector-class-pattern/): Selectors must be written in BEM style and match the regex.
* [`selector-list-comma-newline-after`](http://stylelint.io/user-guide/rules/selector-list-comma-newline-after/): There must always be a newline after the commas of selector lists.
* [`selector-max-compound-selectors`](http://stylelint.io/user-guide/rules/selector-max-compound-selectors/): Limit the number of compound selectors in a selector to `3`.
* [`selector-no-qualifying-type`](http://stylelint.io/user-guide/rules/selector-no-qualifying-type/): Disallow qualifying a selector by type.
* [`selector-no-vendor-prefix`](http://stylelint.io/user-guide/rules/selector-no-vendor-prefix/): Disallow vendor prefixes for selectors.
* [`selector-pseudo-element-colon-notation`](http://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/): Applicable pseudo-elements must always use the double colon notation.
* [`selector-pseudo-element-no-unknown`](http://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/): Disallow unknown pseudo-element selectors.

#### String

* [`string-quotes`](http://stylelint.io/user-guide/rules/string-quotes/): Strings must always be wrapped with single quotes.

#### Value

* [`value-no-vendor-prefix`](http://stylelint.io/user-guide/rules/value-no-vendor-prefix/): Disallow vendor prefixes for values.

#### SCSS
* [`at-extend-no-missing-placeholder`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md): Disallow at-extends (`@extend`) with missing placeholders.
* [`at-function-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md): SCSS functions must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`at-import-no-partial-leading-underscore`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md): Disallow leading underscore in partial names in `@import`.
* [`at-mixin-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md): SCSS mixins must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`dollar-variable-colon-space-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md): Require a single space after the colon in $-variable declarations.
* [`dollar-variable-colon-space-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before/README.md): Disallow whitespace before the colon in $-variable declarations.
* [`dollar-variable-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md): SCSS variables must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`percent-placeholder-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/README.md): SCSS `%`-placeholders must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`selector-no-redundant-nesting-selector`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md): Disallow redundant nesting selectors (`&`).

#### Order

* [`order/order`](https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md): Order of content within declaration blocks. custom-properties (`--property: 10px;`), then dollar-variables ($variable), then declarations
* [`order/properties-order`](https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md): Order of properties within declaration blocks.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)