<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import RuFlag from '@/shared/assets/svg/components/RuFlag.vue';
import UsFlag from '@/shared/assets/svg/components/UsFlag.vue';
import { EN, RU } from '@/shared/constants/i18n/locales';
import { LOCALE } from '@/shared/constants/localStorageKeys';

const { locale } = useI18n({ useScope: 'global' });

const switchLang = () => {
    if (locale.value === EN) {
        locale.value = RU;
        localStorage.setItem(LOCALE, RU);
    } else {
        locale.value = EN;
        localStorage.setItem(LOCALE, EN);
    }
};
</script>

<template>
    <RuFlag
        v-if="locale === EN"
        :class="$style.flagImg"
        :height="'24px'"
        @click="switchLang"
    />
    <UsFlag
        v-else
        :class="$style.flagImg"
        :height="'24px'"
        @click="switchLang"
    />
</template>

<style lang="scss" module>
@import './styles.scss';
</style>
