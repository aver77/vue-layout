import Frontend from '@/shared/assets/svg/components/Frontend.vue';
import Server from '@/shared/assets/svg/components/Server.vue';
import Console from '@/shared/assets/svg/components/Console.vue';
import { Component } from 'vue';
import type { TranslateFunction } from '@/shared/ts/types';

export enum stackKeysEnum {
    WORK = 'WORK',
    PERSONAL_FRONT = 'PERSONAL_FRONT',
    PERSONAL_BACK = 'PERSONAL_BACK'
}

export const stackWorkUsage = [
    'JavaScript',
    'Typescript',
    'React.js',
    'Redux',
    'HTML',
    'CSS',
    'SASS',
    'CSS in JS',
    'Ant Design',
    'Material UI',
    'Webpack',
    'Jest',
    'Playwright',
    'Rest API',
    'GraphQL',
    'Postman',
    'Swagger'
];

export const stackPersonalFrontUsage = [
    'Next.js',
    'Vue.js',
    'VueX',
    'Pinia',
    'Svelte.js',
    'Tailwind',
    'Vite'
];

export const stackPersonalBackUsage = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'Docker',
    'Docker-compose',
    'Microservices'
];

interface IGetImgAndStackByKey {
    imgComponent: Component;
    currentStack: string[];
}
export const getImgAndStackByKey = (
    key: stackKeysEnum
): IGetImgAndStackByKey => {
    switch (key) {
        case stackKeysEnum.WORK: {
            return {
                imgComponent: Console,
                currentStack: stackWorkUsage
            };
        }
        case stackKeysEnum.PERSONAL_BACK: {
            return {
                imgComponent: Server,
                currentStack: stackPersonalBackUsage
            };
        }
        case stackKeysEnum.PERSONAL_FRONT:
        default: {
            return {
                imgComponent: Frontend,
                currentStack: stackPersonalFrontUsage
            };
        }
    }
};

export const getTitleByKeyAndT = (key: stackKeysEnum, t: TranslateFunction) => {
    switch (key) {
        case stackKeysEnum.WORK: {
            return t('main.about.stackTitle.work');
        }
        case stackKeysEnum.PERSONAL_BACK: {
            return t('main.about.stackTitle.backend');
        }
        case stackKeysEnum.PERSONAL_FRONT:
        default: {
            return t('main.about.stackTitle.frontend');
        }
    }
};
