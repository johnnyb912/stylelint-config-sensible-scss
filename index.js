module.exports = {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-order'],
    rules: {
        'alpha-value-notation': 'number',
        'annotation-no-unknown': [
            true,
            {
                ignoreAnnotations: ['default']
            }
        ],
        'at-rule-disallowed-list': ['debug'],
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['after-same-name', 'first-nested'],
                ignore: [
                    'after-comment',
                    'blockless-after-blockless',
                    'blockless-after-same-name-blockless'
                ],
                ignoreAtRules: ['keyframes', 'media', 'include', 'else', 'mixin']
            }
        ],
        'color-named': 'never',
        'color-no-hex': true,
        'comment-no-empty': true,
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
        'declaration-block-single-line-max-declarations': 1,
        'declaration-empty-line-before': null,
        'declaration-no-important': true,
        'declaration-property-value-disallowed-list': {
            border: ['none'],
            borderTop: ['none'],
            borderRight: ['none'],
            borderBottom: ['none'],
            borderLeft: ['none']
        },
        'max-nesting-depth': [
            4,
            {
                ignore: ['blockless-at-rules', 'pseudo-classes'],
                severity: 'warning',
            }
        ],
        'no-descending-specificity': null,
        'no-empty-source': true,
        'no-unknown-animations': true,
        'property-no-vendor-prefix': [
            true,
            {
                ignoreProperties: ['appearance', 'text-size-adjust']
            }
        ],
        'selector-class-pattern': null,
        'selector-id-pattern': null,
        'selector-max-id': [0, { 'severity' : 'warning' }],
        'selector-max-type': [0, { 'severity' : 'warning'}],
        'selector-no-qualifying-type': [
            true,
            {
                ignore: ['attribute']
            }
        ],
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['/^ng-/']
            }
        ],
        'time-min-milliseconds': 200,
        'value-keyword-case': [
            'lower',
            {
                camelCaseSvgKeywords: true,
            }
        ],
        'scss/at-each-key-value-single-line': true,
        'scss/at-function-named-arguments': null,
        'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/at-import-partial-extension-blacklist': null,
        'scss/at-import-partial-extension-whitelist': null,
        'scss/at-mixin-argumentless-call-parentheses': null,
        'scss/at-mixin-named-arguments': null,
        'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/at-use-no-unnamespaced': true,
        'scss/declaration-nested-properties': null,
        'scss/dimension-no-non-numeric-values': true,
        'scss/dollar-variable-colon-newline-after': null,
        'scss/dollar-variable-default': null,
        'scss/dollar-variable-first-in-block': [
            true,
            {
                ignore: ['comments', 'imports'],
                except: ['function']
            }
        ],
        'scss/dollar-variable-no-missing-interpolation': null,
        'scss/dollar-variable-pattern': '^[_]?[a-zA-Z]+([a-zA-Z0-9-_]+[a-zA-Z0-9]+)?$',
        'scss/double-slash-comment-inline': null,
        'scss/function-color-relative': [
            true,
            {
                severity: 'warning',
                message: 'Use the built-in Sass scale-color method, https://sass-lang.com/documentation/modules/color#scale-color'
            }
        ],
        'scss/media-feature-value-dollar-variable': null,
        'scss/no-duplicate-dollar-variables': [
            true,
            {
                ignoreInside: ['at-rule'],
                ignoreInsideAtRules: ['if', 'mixin', 'function']
            }
        ],
        'scss/partial-no-import': null,
        'scss/percent-placeholder-pattern': '^[a-zA-Z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/selector-no-redundant-nesting-selector': true,
        'order/order': [
            'custom-properties',
            'dollar-variables',
            'declarations',
            'rules'
        ],
        'order/properties-order': [
            [
                {
                    emptyLineBefore: 'never',
                    noEmptyLineBetween: true,
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
                    noEmptyLineBetween: true,
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
                    noEmptyLineBetween: true,
                    properties: [
                        'flex',
                        'flex-grow',
                        'flex-shrink',
                        'flex-basis',
                        'flex-flow',
                        'flex-direction',
                        'flex-wrap',
                        'flex-align',
                        'flex-order',
                        'flex-pack',
                        'order'
                    ]
                },
                {
                    noEmptyLineBetween: true,
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
                        'grid-column-gap',
                        'gap',
                        'columns',
                        'column-count',
                        'column-gap',
                        'column-fill',
                        'column-rule',
                        'column-span',
                        'column-width',
                        'row-gap'
                    ]
                },
                {
                    noEmptyLineBetween: true,
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
                    noEmptyLineBetween: true,
                    properties: [
                        'align-items',
                        'justify-items',
                        'place-items',
                        'align-content',
                        'justify-content',
                        'place-content',
                        'align-self',
                        'justify-self',
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
                        'font-display',
                        'font-size-adjust',
                        'font-stretch',
                        'font-effect',
                        'font-emphasize',
                        'font-emphasize-position',
                        'font-emphasize-style',
                        'src',
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
                        'overflow-wrap',
                        'padding',
                        'padding-top',
                        'padding-right',
                        'padding-bottom',
                        'padding-left',
                        'pointer-events',
                        'quotes',
                        'resize',
                        'speak',
                        'scrollbar-color',
                        'scrollbar-width',
                        'scrollbar-gutter',
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
                        'text-size-adjust',
                        'text-transform',
                        'text-wrap',
                        'touch-action',
                        'touch-callout',
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
                    noEmptyLineBetween: true,
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
                    noEmptyLineBetween: true,
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
                    noEmptyLineBetween: true,
                    properties: [
                        'transform',
                        'transform-box',
                        'transform-origin',
                        'transform-style'
                    ]
                },
                {
                    noEmptyLineBetween: true,
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
                unspecified: 'bottomAlphabetical',
                emptyLineBeforeUnspecified: 'threshold',
                emptyLineMinimumPropertyThreshold: 3
            }
        ]
    }
};
