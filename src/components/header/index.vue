<script lang="ts" setup>
import Links from '../links/index.vue';
import ButtonComponent from '@/shared/ui/components/button/index.vue';
import LangSwitcher from './langSwitcher/index.vue';
import pdfCVEn from '@/shared/assets/pdf/NikitaAverochkinCV.pdf';
import pdfCVRu from '@/shared/assets/pdf/NikitaAverochkinCV(ru).pdf';
import { ref } from 'vue';
import { EN } from '@/shared/constants/i18n/locales';

const burgerOpened = ref(false);

const switchBurgerMenu = () => {
    burgerOpened.value = !burgerOpened.value;
};
</script>

<template>
    <header :class="$style.container">
        <div :class="$style.innerContainer">
            <Links :heading="true" />
            <div
                :class="[
                    $style.burgerMenu,
                    burgerOpened && $style.burgerMenuOpen
                ]"
                @click="switchBurgerMenu"
            >
                <div :class="$style.line" />
            </div>
            <ul :class="[$style.ulMenu, !burgerOpened && $style.hidden]">
                <li>
                    <a
                        :href="$i18n.locale === EN ? pdfCVEn : pdfCVRu"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <ButtonComponent>{{
                            $t('components.header.resumeBtn')
                        }}</ButtonComponent>
                    </a>
                </li>
                <li>
                    <LangSwitcher />
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" module>
@import './styles.scss';
</style>
