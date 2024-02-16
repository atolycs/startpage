module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "plugins": [
        "@html-eslint"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@html-eslint/recommended",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
        {
            "files": ["*.html"],
            "parser": "@html-eslint/parser",
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "@html-eslint/indent": ["warn", 2],
        "@html-eslint/lowercase": "warn",
        "@html-eslint/require-meta-charset": "error",
    }
}
