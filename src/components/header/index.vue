<script lang="ts" setup>
import { ref } from 'vue';

import { useGlobalContentfulData } from '@/shared/providers/globalContentfulDataProvider';
import ButtonComponent from '@/shared/ui/components/button/index.vue';
import Links from '../links/index.vue';
import LangSwitcher from './langSwitcher/index.vue';

const burgerOpened = ref(false);

const switchBurgerMenu = () => {
    burgerOpened.value = !burgerOpened.value;
};

const { links } = useGlobalContentfulData();
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
                        :href="links?.resumePdf?.fields?.file?.url"
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
