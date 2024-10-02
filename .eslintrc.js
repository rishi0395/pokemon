module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js", "config.ts"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "object-curly-spacing": ["warn", "always"],
        "@typescript-eslint/brace-style": [
          "warn",
          "1tbs",
          {
            allowSingleLine: false,
          },
        ],
        "@typescript-eslint/comma-spacing": "warn",
        "@typescript-eslint/indent": [
          "warn",
          4,
          {
            SwitchCase: 1,
            ignoredNodes: ["TemplateLiteral"],
          },
        ],
        "@typescript-eslint/keyword-spacing": "error",
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/no-use-before-define": "warn",
        "@typescript-eslint/quotes": [
          "error",
          "single",
          {
            allowTemplateLiterals: true,
            avoidEscape: true,
          },
        ],
        "no-shadow": "off",
        "object-curly-spacing": ["error", "always"],
        "space-before-blocks": "warn",
        "space-infix-ops": [
          "warn",
          {
            int32Hint: true,
          },
        ],
      },
    },
  ],
  rules: {
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
    "array-bracket-spacing": ["error", "never"],
    "arrow-spacing": "error",
    "block-spacing": "warn",
    curly: ["warn", "all"],
    "dot-location": ["warn", "property"],
    "eol-last": ["warn", "always"],
    eqeqeq: ["warn", "smart"],
    "key-spacing": [
      "warn",
      {
        afterColon: true,
      },
    ],
    "linebreak-style": 0,
    "max-len": [
      "warn",
      {
        code: 120,
        ignoreComments: true,
        ignorePattern: "^import .*",
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "no-case-declarations": "off",
    "no-console": "off",
    "no-multi-spaces": [
      "warn",
      {
        ignoreEOLComments: true,
      },
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
      },
    ],
    "no-trailing-spaces": "warn",
    "no-undef": "off",
    "no-var": "error",
    "padded-blocks": ["warn", "never"],
    "prefer-const": "warn",
    "require-atomic-updates": "off",
    "semi-spacing": "warn",
    "spaced-comment": [
      "warn",
      "always",
      {
        block: {
          exceptions: ["*"],
        },
      },
    ],
    "space-before-blocks": "warn",
    "space-in-parens": ["warn", "never"],
    semi: "warn",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
