/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    "env": {
        "node": true
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "prettier",
        "@typescript-eslint"
    ],
    rules: {
        "prettier/prettier": "error",
        'no-console': 'error',
        "curly": "error",
        'no-unused-vars': 'off',
        'no-empty-pattern': 'warn',
        "no-duplicate-imports": "error",
        '@typescript-eslint/no-unused-vars': ["error", { "argsIgnorePattern": "^_" }],
        "@typescript-eslint/consistent-type-imports": [
            "warn",
            {
                "prefer": "type-imports",
                "fixStyle": "inline-type-imports",
            },
        ],
        "@typescript-eslint/no-misused-promises": [
            2,
            {
                "checksVoidReturn": { "attributes": false },
            },
        ],
    },
    settings: {
        "import/parsers": {
            [require.resolve("@typescript-eslint/parser")]: [".ts", ".d.ts"],
        }
    },
};