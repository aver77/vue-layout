<script setup lang="ts">
import { ref } from "vue";

import WithAnimation from "@/components/HOCs/withAnimation/index.vue";

import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import Line from "@/shared/ui/components/line/index.vue";
import PositionItem from "./positionItem/index.vue";

import { getPositions } from "@/modules/mainModule/components/experience/defaultData";
import { experienceId } from "@/shared/constants/elementsIds";

const target = ref<HTMLElement | null>(null);
const getTargetRef = () => target;
</script>

<template>
    <section ref="target" :id="experienceId" :class="$style.container">
        <div :class="$style.titleWrap">
            <WithAnimation :get-slot-ref="getTargetRef">
                <Title :with-dot="true" :title-type="titleTypesEnum.h2">{{
                    $t("main.experience.title")
                }}</Title>
            </WithAnimation>
            <Line :flexed="true" />
        </div>
        <div :class="$style.positionsWrap">
            <PositionItem
                v-for="(position, index) in getPositions($t)"
                :key="index"
                v-bind="position"
                :get-parent-ref="getTargetRef"
            />
        </div>
    </section>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
