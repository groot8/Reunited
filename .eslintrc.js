module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],

    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true

        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-nested-ternary': 'off',
        'no-debugger': 'off',
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
        'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
        'no-underscore-dangle': 'off',
        'react/prop-types': 0,
        'no-shadow': 'off',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/heading-has-content': 'off',
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/anchor-has-content": "off",
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
            'error',
            {
                ul: [
                    'listbox',
                    'menu',
                    'menubar',
                    'radiogroup',
                    'tablist',
                    'tree',
                    'treegrid',
                ],
                ol: [
                    'listbox',
                    'menu',
                    'menubar',
                    'radiogroup',
                    'tablist',
                    'tree',
                    'treegrid',
                ],
                li: ['menuitem', 'option', 'row', 'tab', 'treeitem', 'button'],
                table: ['grid'],
                td: ['gridcell'],
                img: ['button'],
            },
        ],
        'max-len': [
            'error',
            80,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: false,
                ignoreTemplateLiterals: false,
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
};
