<script setup lang="ts">
import ButtonComponent from "@/shared/ui/components/button/index.vue";
import buttonTypesEnum from "@/shared/ui/components/button/buttonTypesEnum";

import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import DotsGrid from "./dotsGrid/index.vue";
import { shortInformationId } from "@/shared/constants/elementsIds";
</script>

<template>
    <section :id="shortInformationId" :class="$style.container">
        <div :class="$style.infoWrapper">
            <Title :title-type="titleTypesEnum.h1">Hey, I'm Nikita</Title>
            <Title :title-type="titleTypesEnum.h3" :with-dot="false">
                I'm a
                <span :class="$style.titleJob">Frontend developer</span>
            </Title>
            <p :class="$style.description">
                I'm creative and constantly growing Frontend developer with more
                than two years of experience working in various industry-leading
                projects and improving diverse React.js SPA and web-resources.
                Seeking to apply my expertise in large-scale or open-source
                projects, solving extraordinary problems and bringing profit to
                customers.
            </p>
            <ButtonComponent :btn-type="buttonTypesEnum.FILLED"
                >Contact me</ButtonComponent
            >
        </div>
        <DotsGrid />
    </section>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
