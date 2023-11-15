<script lang="ts" setup>
import Links from "../links/index.vue";
import ButtonComponent from "@/shared/ui/components/button/index.vue";

import pdfCV from "@/shared/assets/pdf/NikitaAverochkinCV.pdf";
</script>

<template>
    <header :class="$style.container">
        <Links />
        <ButtonComponent :class="$style.btn"
            ><a :href="pdfCV" target="_blank">My Resume</a></ButtonComponent
        >
    </header>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
