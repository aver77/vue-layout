<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { EN, RU } from "@/shared/constants/i18n/locales";

import UsFlag from "@/shared/assets/svg/components/UsFlag.vue";
import RuFlag from "@/shared/assets/svg/components/RuFlag.vue";
import { LOCALE } from "@/shared/constants/localStorageKeys";

const { locale } = useI18n({ useScope: "global" });

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
    <UsFlag
        v-if="locale === EN"
        @click="switchLang"
        :class="$style.flagImg"
        :height="'24px'"
    />
    <RuFlag
        v-else
        @click="switchLang"
        :class="$style.flagImg"
        :height="'24px'"
    />
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
