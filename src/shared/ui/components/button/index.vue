<script setup lang="ts">
import type { PropType } from 'vue';

import buttonTypesEnum from './buttonTypesEnum';

defineProps({
    btnType: {
        type: String as PropType<buttonTypesEnum>,
        default: () => buttonTypesEnum.UNFILLED
    },
    disabled: {
        type: Boolean,
        default: () => false
    }
});
</script>

<template>
    <button
        :class="[
            $style.btnShared,
            disabled
                ? $style.disabled
                : btnType === buttonTypesEnum.FILLED
                  ? $style.filled
                  : $style.unfilled
        ]"
    >
        <slot></slot>
    </button>
</template>

<style module lang="scss">
@import './styles.scss';
</style>
