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

* [`stylelint-config-standard-scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss): The standard, sharable SCSS config for Stylelint
* [`stylelint-order`](https://github.com/hudochenkov/stylelint-order): A plugin pack of order related linting rules for stylelint.

### Configured lints

This is a list of the lints turned on in this configuration, and what they do.

#### At-rule

* [`at-rule-disallowed-list`](https://stylelint.io/user-guide/rules/at-rule-disallowed-list/): Specify a list of disallowed at-rules.
  * `"debug"` Disallow the use of `@debug`.

#### Color

* [`color-named`](http://stylelint.io/user-guide/rules/color-named/): Colors must never be named.
* [`color-no-hex`](http://stylelint.io/user-guide/rules/color-no-hex/): Disallow Hex colors.

#### Declaration block

* [`declaration-block-single-line-max-declarations`](http://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/): There should never be more than `1` declaration per line.

#### Declaration Property

* [`declaration-property-value-blacklist`](http://stylelint.io/user-guide/rules/declaration-property-value-blacklist/): Specify a blacklist of disallowed property and value pairs within declarations.
  * `^border`: Disallow the use of the word `none` for borders, use `0` instead.

#### General

* [`max-nesting-depth`](http://stylelint.io/user-guide/rules/max-nesting-depth/): Limit the allowed nesting depth to `4`.

#### Property

* [`property-no-vendor-prefix`](http://stylelint.io/user-guide/rules/property-no-vendor-prefix/): Disallow vendor prefixes for properties.

#### Selector

* [`selector-class-pattern`](http://stylelint.io/user-guide/rules/selector-class-pattern/): Selectors must be written in BEM style and match the regex.
* [`selector-id-pattern`](http://stylelint.io/user-guide/rules/selector-id-pattern/): Specify a pattern for ID selectors.
* [`selector-no-qualifying-type`](http://stylelint.io/user-guide/rules/selector-no-qualifying-type/): Disallow qualifying a selector by type.
* [`selector-pseudo-element-no-unknown`](http://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/): Disallow unknown pseudo-element selectors.

#### Value

* [`value-keyword-case`](http://stylelint.io/user-guide/rules/value-keyword-case/): Specify lowercase or uppercase for keywords values.

#### SCSS
* [`at-function-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md): SCSS functions must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`at-mixin-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md): SCSS mixins must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`dollar-variable-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md): SCSS variables must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`percent-placeholder-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/README.md): SCSS `%`-placeholders must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`selector-no-redundant-nesting-selector`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md): Disallow redundant nesting selectors (`&`).

#### Order

* [`order/order`](https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md): Order of content within declaration blocks. custom-properties (`--property: 10px;`), then dollar-variables ($variable), then declarations
* [`order/properties-order`](https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md): Order of properties within declaration blocks.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
