/*
 *
 *  Luxloop Default .eslintrc
 *  =============
 *
 *  Based on Cornelius Weidmann's .eslintrc
 *  https://gist.github.com/caweidmann/e3c586cb105e8864308b
 *
 *  Distributed under GPL
 *
 */

module.exports = {
  "env": {
    "browser": true
  },
  "globals": {
    "jQuery": false,
    "$": false,
    "_": false
  },
  "rules": {

    // VARIABLES
    //"init-declarations": 0
    //"no-catch-shadow": 0
    "no-delete-var": 1, // `2` is default
    "no-label-var": 1,
    //"no-restricted-globals": 0
    "no-shadow-restricted-names": 2,
    "no-shadow": [2, {"builtinGlobals": false, "hoist": "all"}], // `[2, {"builtinGlobals": false, "hoist": "functions"}]` is default
    "no-undef-init": 1, // `2` is default
    "no-undef": 2,
    //"no-undefined": 0
    "no-unused-vars": [1, {"vars": "all", "args": "all"}], // `[2, {"vars": "all", "args": "after-used"}]` is default, optionally set `[2, {"vars": "all", "args": "after-used", "varsIgnorePattern": "<regex>", "argsIgnorePattern": "<regex>"}]`
    "no-use-before-define": 1,


    // POSSIBLE ERRORS
    "no-cond-assign": [2, "except-parens"],
    "no-console": 1,
    "no-constant-condition": 2,
    "no-control-regex": 1,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 1,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 1,
    "no-extra-parens": [1, "all"],
    "no-extra-semi": 1,
    "no-func-assign": 2,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": [2,{ "skipRegExps": true, "skipComments": true, "skipStrings": true }],
    "no-obj-calls": 2,
    //"no-prototype-builtins": 0
    "no-regex-spaces": 1,
    "no-sparse-arrays": 2,
    //"no-unexpected-multiline": 0
    "no-unreachable": 2,
    //"no-unsafe-finally": 0
    //"no-unsafe-negation": 0
    "use-isnan": 2,
    //"valid-jsdoc": 0,
    "valid-typeof": [2,{ "requireStringLiterals": true }],



    "no-negated-in-lhs": 2,
    "no-unexpected-multiline": 2,
    "no-unsafe-negation":1,


    //BEST PRACTICES
    "accessor-pairs": [2, {"getWithoutSet": false, "setWithoutGet": true}],
    //"array-callback-return": 0
    "block-scoped-var": 2,
    //"class-methods-use-this": 0
    "complexity": [1, 10],
    "consistent-return": 1,
    "curly": [1, "all"],
    "default-case": 1,
    "dot-location": [2, "property"],
    "dot-notation": 1,
    "eqeqeq": 2,
    "guard-for-in": 1,
    "no-alert": 1,
    "no-caller": 2,
    //"no-case-declarations": 0
    "no-div-regex": 1,
    "no-else-return": 1,
    //"no-empty-function": 0
    //"no-empty-pattern": 0
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 1,
    "no-extra-bind": 2,
    //"no-extra-label": 0
    "no-fallthrough": 1,
    "no-floating-decimal": 1,
    "no-global-assign": [2, {"exceptions": ["Object"]}],
    "no-implicit-coercion": [1, {"boolean": false, "number": true, "string": false}],
    //"no-implicit-globals": 0
    "no-implied-eval": 2,
    "no-invalid-this": 1,
    "no-iterator": 1,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 1,
    "no-magic-numbers": 1,
    "no-multi-spaces": [2, {"exceptions": {"VariableDeclarator": true, "ImportDeclaration": true, "AssignmentExpression": true, "ObjectExpression": true}}],
    "no-multi-str": 1,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-param-reassign": 1,
    "no-proto": 2,
    "no-redeclare": [2, {"builtinGlobals": true}], // `2` is recommended and actually defaults to `[2, {"builtinGlobals": false}]`
    //"no-restricted-properties": 0
    "no-return-assign": [2, "except-parens"],
    "no-script-url": 2,
    "no-self-assign": [2, {"props": false}],
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition":2,
    "no-unused-expressions": [2, {"allowShortCircuit": false, "allowTernary": false}],
    //"no-unused-labels": 0
    "no-useless-call": 2,
    "no-useless-concat": 1,
    "no-useless-escape": 1,
    "no-void": 2,
    "no-warning-comments": [1, {"terms": ["todo", "fixme"], "location": "anywhere"}],
    "no-with": 2,
    "radix": [1,"as-needed"],
    "vars-on-top": 1,
    //"wrap-iife": 0
    "yoda": [1, "never"],


    // STYLISTIC ISSUES
    //"array-bracket-spacing": 0,
    "block-spacing": [1, "always"],
    "brace-style": [1, "1tbs", {"allowSingleLine": true}],
    //"camelcase": 0,
    "comma-dangle": [2, "never"],
    //"comma-spacing": 0,
    "comma-style": [1, "last"],
    //"computed-property-spacing": 0
    //"consistent-this": 0
    "eol-last": 1,
    "func-call-spacing": [1,"never"],
    //"func-names": 0,
    "func-style": [1, "declaration"],
    //"id-blacklist": 0
    //"id-length": 0
    //"id-match": 0
    "indent": [1, 2, {"SwitchCase": 1, "VariableDeclarator": 2}],
    //"jsx-quotes": 0
    "key-spacing": [1, {"beforeColon": false, "afterColon": true, "mode": "minimum"}],
    "keyword-spacing": 1,
    //"line-comment-position": 0
    "linebreak-style": [2,"unix"],
    //"lines-around-comment": 0
    //"lines-around-directive": 0
    "max-depth": [1, 4],
    //"max-len": 0
    //"max-lines": 0
    "max-nested-callbacks": [1, 4],
    //"max-params": 0
    //"max-statements-per-line": 0
    //"max-statements": 0
    //"multiline-ternary": 0
    "new-cap": [1, {"newIsCap": true, "capIsNew": true}], // optionally set `[2, {"capIsNewExceptions": ["Person"]}]`
    "new-parens": 1,
    //"newline-after-var": 0
    //"newline-before-return": 0
    //"newline-per-chained-call": 0
    "no-array-constructor": 1,
    "no-bitwise": 1,
    //"no-continue": 0
    //"no-inline-comments": 0,
    "no-lonely-if": 1,
    "no-mixed-operators": 1,
    "no-mixed-spaces-and-tabs": 1, // optionally set `[2, "smart-tabs"]`
    //"no-multiple-empty-lines": 0
    "no-negated-condition": 1,
    "no-nested-ternary": 1,
    "no-new-object": 1,
    //"no-plusplus": 0
    //"no-restricted-syntax": 0,
    "no-tabs": 1,
    //"no-ternary": 0
    "no-trailing-spaces": [1, {"skipBlankLines": false}],
    "no-underscore-dangle": 1,
    "no-unneeded-ternary": [1, {"defaultAssignment": true}],
    "no-whitespace-before-property": 1,
    //"object-curly-newline": 0,
    //"object-curly-spacing": 0,
    //"object-property-newline": 0
    //"one-var-declaration-per-line": 0
    //"one-var": 0
    //"operator-assignment": 0
    "operator-linebreak": [1, "after"],
    //"padded-blocks": 0
    "quote-props": [1, "consistent-as-needed", {"keywords": true, "unnecessary": false, "numbers": true}],
    //"quotes": 0
    //"require-jsdoc": 0
    "semi-spacing": [1, {"before": false, "after": true}],
    //"semi": 0
    //"sort-keys": 0
    //"sort-vars": 0
    "space-before-blocks": [1, { "functions": "always", "keywords": "always", "classes": "always" }], // optionally set `[2, {"functions": "never", "keywords": "always"}]`
    "space-before-function-paren": [1, {"anonymous": "never", "named": "never"}],
    //"space-in-parens": 0
    "space-infix-ops": [1, {"int32Hint": false}],
    "space-unary-ops": [1, {"words": true, "nonwords": false}],
    //"spaced-comment": 0
    //"unicode-bom": 0
    "wrap-regex": 1
  }
}
