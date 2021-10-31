module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['src/models/**/*', 'src/seeders/**/*', 'src/migrations/**/*'],
  rules: {
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
  },
};
