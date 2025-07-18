module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    //base method to set up vue + ts parser (vue-eslint-parser, @typescript-eslint/parser)
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser"
    },
    //define only plugins
    plugins: ["vue", "@typescript-eslint", "prettier", "simple-import-sort"],
    //load plugins and configs
    extends: [
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        "@vue/typescript/recommended",
        "prettier"
    ],
    ignorePatterns: ["*.d.ts"],
    //rules for vue
    rules: {
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": 0,
        "vue/component-api-style": ["warn", ["script-setup", "composition"]],
        "vue/require-default-prop": 0,
        "vue/no-unused-components": 0,
        "vue/multi-word-component-names": 0,
        "vue/order-in-components": [
            "warn",
            {
                order: [
                    "el",
                    "name",
                    "key",
                    "parent",
                    "functional",
                    ["delimiters", "comments"],
                    ["components", "directives", "filters"],
                    "extends",
                    "mixins",
                    ["provide", "inject"],
                    "ROUTER_GUARDS",
                    "layout",
                    "middleware",
                    "validate",
                    "scrollToTop",
                    "transition",
                    "loading",
                    "inheritAttrs",
                    "model",
                    ["props", "propsData"],
                    "emits",
                    "setup",
                    "asyncData",
                    "data",
                    "fetch",
                    "head",
                    "computed",
                    "watch",
                    "watchQuery",
                    "LIFECYCLE_HOOKS",
                    "methods",
                    ["template", "render"],
                    "renderError"
                ]
            }
        ],
        "prettier/prettier": ["warn"],
        "simple-import-sort/imports": ["error", {
            groups: [
                /** 1. Imports from solid-js */
                ["^vue", "^vue-i18n"],
                /** 2. Imports from rest external libs */
                ["^\\w"],
                /** 3. Absolute project imports (@/) and relative import */
                ["^@/", "^\\."],
                /** 4. Type-imports */
                ["^type:"],
                /** 5. Media-files (images, fonts etc.) */
                ["\\.(png|jpe?g|gif|svg|webp|avif|mp4|mp3|woff2?|eot|ttf|otf)$"],
                /** 6. Styles */
                ["'\\.css$', '\\.scss$', '\\.sass$', '\\.less$'"],
            ],
        }],
        "@typescript-eslint/consistent-type-imports": ["error", {
            prefer: "type-imports",
            disallowTypeAnnotations: false,
        }],
    }
};
