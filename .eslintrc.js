'use strict';

module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true,
		'mocha': true
	},
	'extends': 'eslint:recommended',
	'globals': {
		'$': true,
		'chrome': true,
		'Require': true,
		'define': true
	},
	'rules': {
		/**
		 * Possible errors
		 */
		// Enforce “for” loop update clause moving the counter
		// in the right direction
		'for-direction': 'error',
		// Allow the use of console
		'no-console': 'off',
		// Disallow template literal placeholder syntax in regular string
		'no-template-curly-in-string': 'error',
		// Enforce valid JSDoc comments
		'valid-jsdoc': ['error', { 'requireReturn': false }],

		/**
		 * Best practices
		 */
		// Enforce consistent brace style for all control statements
		'curly': 'error',
		// Require the use of === and !==
		'eqeqeq': 'error',
		// Disallow `else` blocks after `return` statements in `if` statements
		'no-else-return': 'error',
		// Disallow empty functions
		'no-empty-function': 'error',
		// Disallow function declarations and expressions inside loop statements
		'no-loop-func': 'error',
		// Disallow new operators with the String, Number, and Boolean objects
		'no-new-wrappers': 'error',
		// Disallow unnecessary concatenation of strings
		'no-useless-concat': 'error',
		// Disallow redundant return statements
		'no-useless-return': 'error',

		/**
		 * Strict mode
		 */
		// Require global strict mode directive
		'strict': ['error', 'global'],

		/**
		 * Stylistic Issues
		 */
		// Require 'one true brace style', in which the opening brace
		// of a block is placed on the same line as its corresponding
		// statement or declaration
		'brace-style': ['error', '1tbs'],
		// Disallow spaces inside of brackets
		'array-bracket-spacing': ['error', 'never'],
		// Require space after comma
		'comma-spacing': ['error', { 'after': true }],
		// Require or Disallow newline at the end of files
		'eol-last': ['error', 'always'],
		// Disallow spacing between function identifiers and their invocations
		'func-call-spacing': 'error',
		// use tabs as indentation
		'indent': ['error', 'tab', {
			// enforces indentation level for case clauses in switch statements
			'SwitchCase': 1,
		}],
		// Require space after colon in object literal properties
		'key-spacing': ['error', { 'afterColon': true }],
		// Require space before and after keywords
		'keyword-spacing': ['error'],
		// Require Unix line endings
		'linebreak-style': ['error', 'unix'],
		// Disallow empty block statements
		'no-empty': ['error', { 'allowEmptyCatch': true }],
		// Disallow `if` statements as the only statement in `else` blocks
		'no-lonely-if': 'error',
		// Disallow multiple spaces
		'no-multi-spaces': 'error',
		// Disallow nested ternary expressions
		'no-nested-ternary': 'error',
		// Disallow trailing whitespace at the end of lines
		'no-trailing-spaces': 'error',
		// Disallow ternary operators when simpler alternatives exist
		'no-unneeded-ternary': 'error',
		// Disallow whitespace before properties
		'no-whitespace-before-property': 'error',
		// Require spaces inside curly braces
		'object-curly-spacing': ['error', 'always'],
		// Require single quotes
		'quotes': ['error', 'single'],
		// Require space before blocks
		'space-before-blocks': ['error', 'always'],
		// Disallow a space before function parenthesis
		'space-before-function-paren': ['error', 'never'],
		// Disallow spaces inside of parentheses
		'space-in-parens': 'error',
		// Require spacing around infix operators
		'space-infix-ops': 'error',
		// Enforce consistent spacing after the // or /* in a comment
		'spaced-comment': 'error',
		// Require semicolon at the end of statement
		'semi': ['error', 'always'],
		// Enforce spacing around colons of switch statements
		'switch-colon-spacing': ['error', { 'after': true, 'before': false }],

		/**
		 * ECMAScript 6
		 */
		// Require method and property shorthand syntax for object literals
		'object-shorthand': ['error', 'always'],
		// Require template literals instead of string concatenation
		'prefer-template': 'error',
		// Disallow spacing around embedded expressions of template strings
		'template-curly-spacing': 'error',
	}
};
