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
            <Title :title-type="titleTypesEnum.h1">{{
                $t("main.shortInformation.nameGreet")
            }}</Title>
            <Title :title-type="titleTypesEnum.h3" :with-dot="false">
                {{ $t("shared.i") }}
                <span :class="$style.titleJob">{{
                    $t("main.shortInformation.jobTitle")
                }}</span>
            </Title>
            <p :class="$style.description">
                {{ $t("main.shortInformation.description") }}
            </p>
            <a
                href="mailto:aser-14@bk.ru"
                target="_blank"
                rel="noreferrer noopener"
            >
                <ButtonComponent :btn-type="buttonTypesEnum.FILLED">
                    {{ $t("main.shortInformation.contactBtn") }}
                </ButtonComponent>
            </a>
        </div>
        <DotsGrid />
    </section>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
