<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import MainPage from '@/pages/mainPage/index.vue';
import { globalContentfulDataProvider } from '@/shared/providers/globalContentfulDataProvider';
import AppLayout from './appLayout/index.vue';

const { t } = useI18n({ useScope: 'global' });

globalContentfulDataProvider();
</script>

<template>
    <AppLayout>
        <MainPage />
    </AppLayout>
</template>

<style lang="scss">
@import './globals.scss';
</style>
