/** @type {import("prettier").Config} */
module.exports = {
    "endOfLine": "lf",
    "printWidth": 80,
    "tabWidth": 2,
    "singleQuote": true,
    "trailingComma": "all",
    "arrowParens": "always",
    "semi": false,
    "singleAttributePerLine": true,
    "plugins": [
        "@ianvs/prettier-plugin-sort-imports"
    ],
    "importOrder": [
        "<THIRD_PARTY_MODULES>",
        "",
        "^types$",
        "^@/(.*)$",
        "",
        "^[./]"
    ],
    "importOrderParserPlugins": [
        "typescript",
        "decorators-legacy"
    ]
}