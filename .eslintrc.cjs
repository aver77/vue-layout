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
    "plugins": ["vue", "@typescript-eslint", "prettier"],
    //load plugins and configs
    extends: [
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        '@vue/typescript/recommended',
        "prettier"
    ],
    //rules for vue
    rules: {
        "vue/component-api-style": ["warn", ["script-setup", "composition"]],
        "vue/require-default-prop": 0,
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
        'prettier/prettier': ['error']
    }
};
