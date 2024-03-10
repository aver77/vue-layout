import { createApp } from 'vue';
import App from './app/index.vue';
import { createI18n, useI18n } from 'vue-i18n';

import { EN } from '@/shared/constants/i18n/locales.ts';
import messages from '@/shared/constants/i18n/index.ts';
import { LOCALE } from '@/shared/constants/localStorageKeys.ts';

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem(LOCALE) ?? EN,
    fallbackLocale: EN,
    messages
});

createApp(App, {
    setup() {
        const { t } = useI18n();
        return t;
    }
})
    .use(i18n)
    .mount('#app');
