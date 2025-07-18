<script setup lang="ts">
import type { PropType } from 'vue';

import { lineLayoutsEnum } from '@/shared/ui/components/line/lineEnum';

const { layout } = defineProps({
    thickness: {
        type: String as PropType<`${string}px`>,
        default: () => '1px'
    },
    layout: {
        type: String as PropType<lineLayoutsEnum>,
        default: () => lineLayoutsEnum.HORIZONTAL
    },
    flexed: {
        type: Boolean,
        default: () => false
    }
});

const isHorizontal = layout === lineLayoutsEnum.HORIZONTAL;
</script>

<template>
    <div
        :style="{
            [isHorizontal ? 'border-bottom' : 'border-left']:
                `${thickness} solid`
        }"
        :class="[
            isHorizontal ? $style.horizontal : $style.vertical,
            flexed && $style.flexed
        ]"
    />
</template>

<style module lang="scss">
@import './styles.scss';
</style>
