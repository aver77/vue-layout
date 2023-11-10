<script lang="ts" setup>
import Links from "../links/index.vue";
import ButtonComponent from "@/shared/ui/components/button/index.vue";
</script>

<template>
    <header :class="$style.container">
        <Links />
        <ButtonComponent>My Resume</ButtonComponent>
    </header>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
