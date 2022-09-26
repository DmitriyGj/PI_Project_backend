module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:nestjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'true',
    '@typescript-eslint/explicit-function-return-type': 'true',
    '@typescript-eslint/explicit-module-boundary-types': 'true',
    '@typescript-eslint/no-explicit-any': 'true',
    "@typescript-eslint/no-empty-function": [ "error", { "allow": [ "arrowFunctions" ] } ],
    "@typescript-eslint/type-annotation-spacing": [ "error" ],

    "indent": [ "error", 4, { "SwitchCase": 2 } ],
    "no-multiple-empty-lines": [ "error", { "max": 2, "maxEOF": 0 } ],

    "object-curly-spacing": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "quotes": [ "error", "single" ],

    "semi": [ "error", "always" ],

    "@typescript-eslint/member-delimiter-style": [ "error", {
      "multiline": {
        "delimiter": "none",
        "requireLast": false
      },
      "singleline": {
        "delimiter": "comma",
        "requireLast": false
      }
  } ]
  },
};
