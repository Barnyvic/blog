module.exports = {
        env: {
                browser: true,
                es2021: true,
        },
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint', 'prettier'],
        extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'prettier/@typescript-eslint',
                'plugin:prettier/recommended',
        ],
        parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
        },
        rules: {},
};
