module.exports = {
    extends: "standard",
    env: {
        node: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'no-console': 'off',
        'indent': [ 'error', 2 ],
        'quotes': [ 'error', 'single' ],
    },
};