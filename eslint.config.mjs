// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'

import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import i18next from 'eslint-plugin-i18next'
import * as reactHooks from 'eslint-plugin-react-hooks'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        plugins: { js },
        extends: ['js/recommended'],
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                __IS_DEV__: true,
            },
        },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintPluginPrettierRecommended,
    i18next.configs['flat/recommended'],
    {
        plugins: {
            'react-hooks': reactHooks,
        },
    },
    {
        rules: {
            'react/no-deprecated': 'off',
            'react/display-name': 'off',
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/ban-ts-comment': 'warn',
            'i18next/no-literal-string': ['error', { markupOnly: true }],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
        },
    },
])
