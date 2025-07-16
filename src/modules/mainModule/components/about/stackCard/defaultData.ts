import Frontend from '@/shared/assets/svg/components/Frontend.vue';
import Server from '@/shared/assets/svg/components/Server.vue';
import Console from '@/shared/assets/svg/components/Console.vue';
import { Component } from 'vue';
import type { TranslateFunction } from '@/shared/ts/i18n';

export enum stackKeysEnum {
    WORK = 'WORK',
    PERSONAL_FRONT = 'PERSONAL_FRONT',
    PERSONAL_BACK = 'PERSONAL_BACK'
}

export const getImgComponentByKey = (key: stackKeysEnum): Component => {
    switch (key) {
        case stackKeysEnum.WORK: {
            return Console;
        }
        case stackKeysEnum.PERSONAL_BACK: {
            return Server;
        }
        case stackKeysEnum.PERSONAL_FRONT:
        default: {
            return Frontend;
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
