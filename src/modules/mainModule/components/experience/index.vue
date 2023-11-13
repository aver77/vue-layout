<script setup lang="ts">
import { ref } from "vue";
import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import Line from "@/shared/ui/components/line/index.vue";
import PositionItem from "./positionItem/index.vue";

import { positions } from "@/modules/mainModule/components/experience/defaultData";
import { experienceId } from "@/shared/constants/elementsIds";
import { useScrollSBStore } from "@/shared/libs/stores/scrollSBStore";
import useSetScrollValue from "@/shared/libs/hooks/useSetScrollValue";

const experienceRef = ref<HTMLElement | null>(null);
const { setExperienceScrollValue } = useScrollSBStore();

useSetScrollValue(experienceRef, setExperienceScrollValue);
</script>

<template>
    <div :id="experienceId" ref="experienceRef" :class="$style.container">
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
    </div>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
