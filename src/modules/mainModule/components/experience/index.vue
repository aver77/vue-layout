<script setup lang="ts">
import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import Line from "@/shared/ui/components/line/index.vue";
import PositionItem from "./positionItem/index.vue";

import { positions } from "@/modules/mainModule/components/experience/defaultData";
import { experienceId } from "@/shared/constants/elementsIds";
</script>

<template>
    <section :id="experienceId" :class="$style.container">
        <div :class="$style.titleWrap">
            <Title :with-dot="true" :title-type="titleTypesEnum.h2"
                >Experience</Title
            >
            <Line :class="$style.line" />
        </div>
        <div :class="$style.positionsWrap">
            <PositionItem
                v-for="(position, index) in positions"
                v-bind="position"
                :key="index"
            />
        </div>
    </section>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
