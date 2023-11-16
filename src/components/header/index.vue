<script lang="ts" setup>
import Links from "../links/index.vue";
import ButtonComponent from "@/shared/ui/components/button/index.vue";

import pdfCV from "@/shared/assets/pdf/NikitaAverochkinCV.pdf";
import UsFlag from "@/shared/assets/svg/components/UsFlag.vue";
// import cssVars from "@/shared/styles/vars.scss";
import { ref } from "vue";

const burgerOpened = ref(false);

const switchBurgerMenu = () => {
    burgerOpened.value = !burgerOpened.value;
};
</script>

<template>
    <header :class="$style.container">
        <div :class="$style.innerContainer">
            <Links />
            <div
                @click="switchBurgerMenu"
                :class="[
                    $style.burgerMenu,
                    burgerOpened && $style.burgerMenuOpen
                ]"
            >
                <div :class="$style.line" />
            </div>
            <ul :class="[$style.ulMenu, !burgerOpened && $style.hidden]">
                <li>
                    <ButtonComponent :class="$style.btn"
                        ><a :href="pdfCV" target="_blank"
                            >My Resume</a
                        ></ButtonComponent
                    >
                </li>
                <li>
                    <UsFlag :class="$style.flagImg" :height="'24px'" />
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
