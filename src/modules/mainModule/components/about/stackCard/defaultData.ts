import Frontend from "@/shared/assets/svg/components/Frontend.vue";
import Server from "@/shared/assets/svg/components/Server.vue";
import Console from "@/shared/assets/svg/components/Console.vue";
import { Component } from "vue";
export enum stackKeysEnum {
    WORK = "WORK",
    PERSONAL_FRONT = "PERSONAL_FRONT",
    PERSONAL_BACK = "PERSONAL_BACK"
}

export const stackWorkUsage = [
    "JavaScript",
    "Typescript",
    "React.js",
    "Redux",
    "HTML",
    "CSS",
    "SASS",
    "CSS in JS",
    "Ant Design",
    "Material UI",
    "Webpack",
    "Jest",
    "Playwright",
    "Rest API",
    "Graph QL",
    "Postman",
    "Swagger"
];

export const stackPersonalFrontUsage = [
    "Next.js",
    "Vue.js",
    "VueX",
    "Pinia",
    "Svelte.js",
    "Tailwind",
    "Vite"
];

export const stackPersonalBackUsage = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Docker",
    "Docker-compose",
    "Microservices"
];

interface IGetStackByKey {
    title: string;
    imgComponent: Component;
    currentStack: string[];
}
export const getStackByKey = (key: stackKeysEnum): IGetStackByKey => {
    switch (key) {
        case stackKeysEnum.WORK: {
            return {
                title: "Use at work",
                imgComponent: Console,
                currentStack: stackWorkUsage
            };
        }
        case stackKeysEnum.PERSONAL_BACK: {
            return {
                title: "Personal backend usage",
                imgComponent: Server,
                currentStack: stackPersonalBackUsage
            };
        }
        case stackKeysEnum.PERSONAL_FRONT:
        default: {
            return {
                title: "Personal frontend usage",
                imgComponent: Frontend,
                currentStack: stackPersonalFrontUsage
            };
        }
    }
};
