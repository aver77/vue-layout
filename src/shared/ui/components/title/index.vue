<script setup lang="ts">
import {
    titleTypesEnum,
    titleWeightsEnum
} from "@/shared/ui/components/title/titleEnum";
import { PropType } from "vue";

const { titleType, weight } = defineProps({
    withDot: {
        type: Boolean,
        default: () => true
    },
    weight: {
        type: String as PropType<titleWeightsEnum>,
        default: () => titleWeightsEnum.EBOLD
    },
    titleType: {
        type: String as PropType<titleTypesEnum>,
        required: true
    }
});

const defineClass = (style: Record<string, any>) => {
    return {
        class: [
            style["title_" + titleType],
            style.text,
            weight === titleWeightsEnum.BOLD && style.boldWeight,
            weight === titleWeightsEnum.USUAL && style.usualWeight
        ]
    };
};
</script>

<template>
    <template v-if="titleType === titleTypesEnum.h1">
        <h1 v-bind="defineClass($style)">
            <slot></slot><span v-if="withDot" :class="$style.dot">.</span>
        </h1>
    </template>
    <template v-else-if="titleType === titleTypesEnum.h2">
        <h2 v-bind="defineClass($style)">
            <slot></slot><span v-if="withDot" :class="$style.dot">.</span>
        </h2>
    </template>
    <template v-else-if="titleType === titleTypesEnum.h3">
        <h3 v-bind="defineClass($style)">
            <slot></slot><span v-if="withDot" :class="$style.dot">.</span>
        </h3>
    </template>
    <template v-else-if="titleType === titleTypesEnum.h4">
        <h4 v-bind="defineClass($style)">
            <slot></slot><span v-if="withDot" :class="$style.dot">.</span>
        </h4>
    </template>
    <template v-else-if="titleType === titleTypesEnum.h5">
        <h5 v-bind="defineClass($style)">
            <slot></slot><span v-if="withDot" :class="$style.dot">.</span>
        </h5>
    </template>
    <template v-else>
        <h6 v-bind="defineClass($style)">
            <slot></slot><span v-if="withDot" :class="$style.dot">.</span>
        </h6>
    </template>
</template>

<style module lang="scss">
@import "./styles.scss";
</style>
