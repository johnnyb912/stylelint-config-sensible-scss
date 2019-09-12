module.exports = {
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
        'at-rule-blacklist': ['debug'],
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['after-same-name', 'first-nested'],
                ignore: [
                    'after-comment',
                    'blockless-after-same-name-blockless'
                ],
                ignoreAtRules: ['keyframes', 'media', 'include', 'else', 'mixin']
            }
        ],
        'at-rule-name-case': 'lower',
        'at-rule-name-newline-after': null,
        'at-rule-name-space-after': 'always',
        'at-rule-no-unknown': null,
        'at-rule-no-vendor-prefix': true,
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-semicolon-space-before': 'never',
        'at-rule-whitelist': null,
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': [
            'always',
            {
                ignoreAtRules: ['if', 'else']
            }
        ],
        'block-closing-brace-newline-before': 'always-multi-line',
        'block-closing-brace-space-after': null,
        'block-closing-brace-space-before': 'always-single-line',
        'block-no-empty': true,
        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-newline-before': null,
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'color-named': 'never',
        'color-no-hex': true,
        'color-no-invalid-hex': true,
        'comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['stylelint-commands']
            }
        ],
        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',
        'comment-word-blacklist': null,
        'custom-media-pattern': null,
        'custom-property-empty-line-before': [
            'always',
            {
                except: [
                    'after-comment',
                    'after-custom-property',
                    'first-nested'
                ],
                ignore: ['inside-single-line-block']
            }
        ],
        'custom-property-pattern': null,
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignore: ['consecutive-duplicates-with-different-values']
            }
        ],
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-semicolon-newline-after': 'always-multi-line',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'declaration-empty-line-before': null,
        'declaration-no-important': true,
        'declaration-property-unit-blacklist': null,
        'declaration-property-unit-whitelist': null,
        'declaration-property-value-blacklist': {
            border: ['none'],
            'border-top': ['none'],
            'border-right': ['none'],
            'border-bottom': ['none'],
            'border-left': ['none']
        },
        'declaration-property-value-whitelist': null,
        'font-family-name-quotes': 'always-unless-keyword',
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,
        'font-weight-notation': null,
        'function-blacklist': null,
        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': null,
        'function-comma-newline-before': null,
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': null,
        'function-parentheses-space-inside': 'never-single-line',
        'function-url-no-scheme-relative': true,
        'function-url-quotes': 'always',
        'function-url-scheme-blacklist': null,
        'function-url-scheme-whitelist': null,
        'function-whitelist': null,
        'function-whitespace-after': 'always',
        indentation: 4,
        'keyframe-declaration-no-important': true,
        'keyframes-name-pattern': null,
        'length-zero-no-unit': true,
        linebreaks: 'unix',
        'max-empty-lines': 1,
        'max-line-length': null,
        'max-nesting-depth': [4, { 'severity': 'warning' }],
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-blacklist': null,
        'media-feature-name-case': 'lower',
        'media-feature-name-no-unknown': true,
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-name-value-whitelist': null,
        'media-feature-name-whitelist': null,
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        'media-query-list-comma-newline-after': null,
        'media-query-list-comma-newline-before': null,
        'media-query-list-comma-space-after': 'always',
        'media-query-list-comma-space-before': 'never',
        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-empty-first-line': true,
        'no-eol-whitespace': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,
        'no-missing-end-of-source-newline': true,
        'no-unknown-animations': null,
        'number-leading-zero': 'always',
        'number-max-precision': 9,
        'number-no-trailing-zeros': true,
        'property-blacklist': null,
        'property-case': 'lower',
        'property-no-unknown': true,
        'property-no-vendor-prefix': true,
        'property-whitelist': null,
        'rule-empty-line-before': [
            'always',
            {
                except: ['after-single-line-comment', 'first-nested']
            }
        ],
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-blacklist': null,
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-operator-whitelist': null,
        'selector-attribute-quotes': null,
        'selector-class-pattern': null,
        'selector-combinator-blacklist': null,
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-combinator-whitelist': null,
        'selector-descendant-combinator-no-non-space': null,
        'selector-id-pattern': null,
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-newline-before': null,
        'selector-list-comma-space-after': null,
        'selector-list-comma-space-before': 'never',
        'selector-max-attribute': null,
        'selector-max-class': null,
        'selector-max-combinators': null,
        'selector-max-compound-selectors': [4, { 'severity': 'warning' }],
        'selector-max-empty-lines': 0,
        'selector-max-id': [0, { 'severity' : 'warning' }],
        'selector-max-pseudo-class': null,
        'selector-max-specificity': null,
        'selector-max-type': [0, { 'severity' : 'warning'}],
        'selector-max-universal': null,
        'selector-nested-pattern': null,
        'selector-no-qualifying-type': [true, { 'severity' : 'warning'}],
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-blacklist': null,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-class-whitelist': null,
        'selector-pseudo-element-blacklist': null,
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': true,
        'selector-pseudo-element-whitelist': null,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,
        'shorthand-property-no-redundant-values': true,
        'string-no-newline': true,
        'string-quotes': 'single',
        'time-min-milliseconds': 250,
        'unit-blacklist': null,
        'unit-case': 'lower',
        'unit-no-unknown': true,
        'unit-whitelist': null,
        'value-keyword-case': null,
        'value-list-comma-newline-after': null,
        'value-list-comma-newline-before': null,
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,
        'value-no-vendor-prefix': true,
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        'scss/at-else-empty-line-before': 'never',
        'scss/at-else-if-parentheses-space-before': 'always',
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-function-named-arguments': null,
        'scss/at-function-parentheses-space-before': 'never',
        'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        'scss/at-import-no-partial-leading-underscore': true,
        'scss/at-import-partial-extension-blacklist': null,
        'scss/at-import-partial-extension-whitelist': null,
        'scss/at-mixin-argumentless-call-parentheses': null,
        'scss/at-mixin-named-arguments': null,
        'scss/at-mixin-parentheses-space-before': 'never',
        'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/at-rule-no-unknown': true,
        'scss/dollar-variable-colon-newline-after': null,
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-default': null,
        'scss/dollar-variable-empty-line-before': [
            'always',
            {
                except: ['first-nested', 'after-comment', 'after-dollar-variable']
            }
        ],
        'scss/dollar-variable-no-missing-interpolation': null,
        'scss/dollar-variable-pattern': '^[_]?[a-zA-Z]+([a-zA-Z0-9-_]+[a-zA-Z0-9]+)?$',
        'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/double-slash-comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['between-comments', 'stylelint-commands']
            }
        ],
        'scss/double-slash-comment-inline': null,
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/declaration-nested-properties': null,
        'scss/declaration-nested-properties-no-divided-groups': true,
        'scss/media-feature-value-dollar-variable': null,
        'scss/operator-no-newline-after': null,
        'scss/operator-no-newline-before': true,
        'scss/operator-no-unspaced': true,
        'scss/partial-no-import': null,
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/no-duplicate-dollar-variables': [
            true,
            {
                ignoreInside: ['at-rule'],
                ignoreInsideAtRules: ['if', 'mixin', 'function']
            }
        ],
        'order/order': [
            'custom-properties',
            'dollar-variables',
            'declarations'
        ],
        'order/properties-order': [
            [
                {
                    emptyLineBefore: 'never',
                    properties: [
                        'position',
                        'top',
                        'right',
                        'bottom',
                        'left',
                        'z-index'
                    ]
                },
                {
                    properties: [
                        'width',
                        'min-width',
                        'max-width',
                        'height',
                        'min-height',
                        'max-height'
                    ]
                },
                {
                    emptyLineBefore: 'always',
                    properties: [
                        'appearance',
                        'alignment-baseline',
                        'backface-visibility',
                        'background',
                        'background-attachment',
                        'background-color',
                        'background-image',
                        'background-position',
                        'background-position-x',
                        'background-position-y',
                        'background-repeat',
                        'background-clip',
                        'background-origin',
                        'background-size',
                        'baseline-shift',
                        'behavior',
                        'border',
                        'border-width',
                        'border-style',
                        'border-color',
                        'border-top',
                        'border-top-width',
                        'border-top-style',
                        'border-top-color',
                        'border-right',
                        'border-right-width',
                        'border-right-style',
                        'border-right-color',
                        'border-bottom',
                        'border-bottom-width',
                        'border-bottom-style',
                        'border-bottom-color',
                        'border-left',
                        'border-left-width',
                        'border-left-style',
                        'border-left-color',
                        'border-radius',
                        'border-top-left-radius',
                        'border-top-right-radius',
                        'border-bottom-right-radius',
                        'border-bottom-left-radius',
                        'border-image',
                        'border-image-source',
                        'border-image-slice',
                        'border-image-width',
                        'border-image-outset',
                        'border-image-repeat',
                        'border-collapse',
                        'border-spacing',
                        'box-shadow',
                        'box-sizing',
                        'caption-side',
                        'clear',
                        'clip',
                        'clip-path',
                        'color',
                        'columns',
                        'column-count',
                        'column-gap',
                        'column-fill',
                        'column-rule',
                        'column-span',
                        'column-width',
                        'content',
                        'counter-increment',
                        'counter-reset',
                        'cue',
                        'cue-after',
                        'cue-before',
                        'cursor',
                        'direction',
                        'display',
                        'zoom',
                        '*display',
                        'empty-cells'
                    ]
                },
                {
                    properties: [
                        'flex',
                        'flex-grow',
                        'flex-shrink',
                        'flex-basis',
                        'flex-direction',
                        'flex-wrap',
                        'flex-flow',
                        'flex-align',
                        'flex-order',
                        'flex-pack',
                        'order',
                    ]
                },
                {
                    properties: [
                        'grid',
                        'grid-template',
                        'grid-template-rows',
                        'grid-template-columns',
                        'grid-template-areas',
                        'grid-auto-rows',
                        'grid-auto-columns',
                        'grid-auto-flow',
                        'grid-gap',
                        'grid-row-gap',
                        'grid-column-gap'
                    ]
                }, {
                    properties: [
                        'grid-area',
                        'grid-row',
                        'grid-row-start',
                        'grid-row-end',
                        'grid-column',
                        'grid-column-start',
                        'grid-column-end'
                    ]
                },
                {
                    properties: [
                        'align-items',
                        'justify-items',
                        'place-items',
                        'justify-content',
                        'align-content',
                        'place-content',
                        'justify-self',
                        'align-self',
                        'place-self'
                    ]
                },
                {
                    properties: [
                        'fill',
                        'fill-opacity',
                        'fill-rule',
                        'filter',
                        'float',
                        'font',
                        'font-family',
                        'font-size',
                        'font-smoothing',
                        'font-style',
                        'font-variant',
                        'font-weight',
                        'font-size-adjust',
                        'font-stretch',
                        'font-effect',
                        'font-emphasize',
                        'font-emphasize-position',
                        'font-emphasize-style',
                        'hyphens',
                        'letter-spacing',
                        'line-height',
                        'list-style',
                        'list-style-position',
                        'list-style-type',
                        'list-style-image',
                        'margin',
                        'margin-top',
                        'margin-right',
                        'margin-bottom',
                        'margin-left',
                        'mask',
                        'mask-image',
                        'mask-mode',
                        'mask-repeat',
                        'mask-position',
                        'mask-clip',
                        'mask-origin',
                        'mask-size',
                        'mask-composite',
                        'mask-type',
                        'mask-border',
                        'mask-border-mode',
                        'mask-border-outset',
                        'mask-border-repeat',
                        'mask-border-slice',
                        'mask-border-source',
                        'mask-border-width',
                        'opacity',
                        'orphans',
                        'outline',
                        'outline-width',
                        'outline-style',
                        'outline-color',
                        'outline-offset',
                        'overflow',
                        'overflow-x',
                        'overflow-y',
                        'overflow-scrolling',
                        'padding',
                        'padding-top',
                        'padding-right',
                        'padding-bottom',
                        'padding-left',
                        'pointer-events',
                        'quotes',
                        'speak',
                        'scrollbar-arrow-color',
                        'scrollbar-base-color',
                        'scrollbar-track-color',
                        'scrollbar-face-color',
                        'scrollbar-highlight-color',
                        'scrollbar-3dlight-color',
                        'scrollbar-shadow-color',
                        'scrollbar-darkshadow-color',
                        'stroke',
                        'stroke-dasharray',
                        'stroke-dashoffset',
                        'stroke-linecap',
                        'stroke-linejoin',
                        'stroke-opacity',
                        'stroke-width',
                        'tab-size',
                        'table-layout',
                        'text-align',
                        'text-align-last',
                        'text-decoration',
                        'text-emphasis',
                        'text-emphasis-color',
                        'text-emphasis-style',
                        'text-emphasis-position',
                        'text-indent',
                        'text-justify',
                        'text-outline',
                        'text-overflow',
                        'text-overflow-ellipsis',
                        'text-overflow-mode',
                        'text-rendering',
                        'text-shadow',
                        'text-transform',
                        'text-wrap',
                        'touch-action',
                        'user-select',
                        'vertical-align',
                        'visibility',
                        'white-space',
                        'widows',
                        'word-break',
                        'word-spacing',
                        'word-wrap'
                    ]
                },
                {
                    properties: [
                        'x',
                        'y',
                        'd',
                        'cx',
                        'cy',
                        'r',
                        'rx',
                        'ry'
                    ]
                },
                {
                    properties: [
                        'animation',
                        'animation-name',
                        'animation-duration',
                        'animation-play-state',
                        'animation-timing-function',
                        'animation-delay',
                        'animation-iteration-count',
                        'animation-direction'
                    ]
                },
                {
                    properties: [
                        'transform',
                        'transform-box',
                        'transform-origin',
                        'transform-style'
                    ]
                },
                {
                    properties: [
                        'transition',
                        'transition-delay',
                        'transition-timing-function',
                        'transition-duration',
                        'transition-property'
                    ]
                }
            ],
            {
                unspecified: 'bottomAlphabetical'
            }
        ]
    }
};
