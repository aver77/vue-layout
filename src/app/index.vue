<script setup lang="ts">
import AppLayout from './appLayout/index.vue';
import MainPage from '@/pages/mainPage/index.vue';

import { useI18n } from 'vue-i18n';
import { globalContentfulDataProvider } from '@/shared/providers/globalContentfulDataProvider';

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
