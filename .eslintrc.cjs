module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser"
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "@vue/typescript/recommended",
        "prettier"
    ],
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "vue/component-api-style": ["warn", ["script-setup", "composition"]],
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
        ]
    }
};
