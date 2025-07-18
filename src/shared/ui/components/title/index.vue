<script setup lang="ts">
import type { PropType } from 'vue';

import {
    titleTypesEnum,
    titleWeightsEnum
} from '@/shared/ui/components/title/titleEnum';

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

const defineClass = (style: Record<string, unknown>) => {
    return {
        class: [
            style['title_' + titleType],
            style.text,
            weight === titleWeightsEnum.BOLD && style.boldWeight,
            weight === titleWeightsEnum.USUAL && style.usualWeight
        ]
    };
};
</script>

<template>
    <h1 v-if="titleType === titleTypesEnum.h1" v-bind="defineClass($style)">
        <slot></slot><span v-if="withDot" :class="$style.dot">.</span>
    </h1>
    <h2
        v-else-if="titleType === titleTypesEnum.h2"
        v-bind="defineClass($style)"
    >
        <slot></slot><span v-if="withDot" :class="$style.dot">.</span>
    </h2>
    <h3
        v-else-if="titleType === titleTypesEnum.h3"
        v-bind="defineClass($style)"
    >
        <slot></slot><span v-if="withDot" :class="$style.dot">.</span>
    </h3>
    <h4
        v-else-if="titleType === titleTypesEnum.h4"
        v-bind="defineClass($style)"
    >
        <slot></slot><span v-if="withDot" :class="$style.dot">.</span>
    </h4>
    <h5
        v-else-if="titleType === titleTypesEnum.h5"
        v-bind="defineClass($style)"
    >
        <slot></slot><span v-if="withDot" :class="$style.dot">.</span>
    </h5>
    <h6 v-else v-bind="defineClass($style)">
        <slot></slot><span v-if="withDot" :class="$style.dot">.</span>
    </h6>
</template>

<style module lang="scss">
@import './styles.scss';
</style>
