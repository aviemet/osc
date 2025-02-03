import { fixupPluginRules } from '@eslint/compat'
import stylistic from '@stylistic/eslint-plugin'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import tsParser from '@typescript-eslint/parser'
import jsoncPlugin from 'eslint-plugin-jsonc'
import jsoncParser from 'jsonc-eslint-parser'
import json from "@eslint/json";

const ignores = [
	'app/javascript/**/*',
	'app/frontend/types/serializers/**/*',
	'app/frontend/lib/routes/urlParams.ts',
	'app/frontend/lib/routes/routes.js',
	'app/frontend/lib/routes/routes.d.ts',
	'tmp/**/*',
	'public/**/*',
]

export default [
	// Typescript/Javascript files
	{
		...stylistic.configs.customize({
			indent: 'tab',
		}),

		files: ['**/*.{js,jsx,ts,tsx}'],
		ignores,
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		settings: {
			'react': {
				version: 'detect',
			},
			'import/resolver': {
				typescript: {},
			},
			'jsx-a11y': {
				polymorphicPropName: 'component',
			},
		},
		plugins: {
			'react-hooks': fixupPluginRules(reactHooksPlugin),
			'jsx-a11y': jsxA11yPlugin,
			'@stylistic': stylistic,
		},
		rules: {
			'@stylistic/indent': ['error', 'tab', {
				SwitchCase: 1,
				VariableDeclarator: 'first',
				MemberExpression: 1,
				ArrayExpression: 1,
				ignoredNodes: [
          "TSTypeParameterInstantiation",
        ],
			}],
			'@stylistic/brace-style': ['error', '1tbs', {
				allowSingleLine: true,
			}],
			'@stylistic/object-curly-spacing': ['error', 'always', {
				objectsInObjects: true,
			}],
			'@stylistic/jsx-curly-spacing': ['error', {
				when: 'always',
				children: true,
			}],
			'@stylistic/member-delimiter-style': ['error', {
				multiline: {
					delimiter: 'none',
				},
				singleline: {
					delimiter: 'comma',
				},
				multilineDetection: 'brackets',
			}],
			'@stylistic/jsx-one-expression-per-line': 'off',
			'@stylistic/keyword-spacing': ['error', {
				after: true,
				before: true,
				overrides: {
					if: { after: false },
					for: { after: false },
					while: { after: false },
					switch: { after: false },
					catch: { after: false },
				},
			}],
			'@stylistic/comma-dangle': ['error', {
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'only-multiline',
			}],
			'@stylistic/multiline-ternary': ['error', 'always-multiline'],
			'@stylistic/space-infix-ops': 'error',
      '@stylistic/space-unary-ops': ['error', {
        words: true,
        nonwords: false,
        overrides: {
          '!': false,
          '!!': false,
          '+': true,
          '-': true,
        },
      }],
			'no-trailing-spaces': ['error', {
        skipBlankLines: false,
        ignoreComments: false
      }],
			'no-unused-vars': ['warn', {
				vars: 'all',
				args: 'none',
			}],
			'eqeqeq': 'error',
			'no-console': 'warn',
			'eol-last': ['error', 'always'],
			'semi': ['error', 'never'],
			...reactHooksPlugin.configs.recommended.rules,
			'@stylistic/quotes': ['error', 'double', { 
				avoidEscape: true,
				allowTemplateLiterals: true 
			}],
		},
	},
	// Typescript declaration files
	{
		files: ['**/*.d.ts'],
		ignores,
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/member-delimiter-style': 'off',
			'@stylistic/ts/indent': 'off',
		},
	},
	// Json files
	{
		files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
		language: "json/json",
		ignores,
		plugins: {
			jsonc: jsoncPlugin,
			json,
		},
		languageOptions: {
			parser: jsoncParser,
		},
		rules: {
			"json/no-duplicate-keys": "error",
			'jsonc/indent': ['error', 2, { ignoredNodes: ['Property'] }],
			'@stylistic/no-multi-spaces': 'off',
		},
	},
]
