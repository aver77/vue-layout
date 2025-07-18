<script lang="ts" setup>
import type { CSSProperties, PropType, Ref } from 'vue';
import { onMounted, ref } from 'vue';

import { observeElement } from '@/shared/lib/utils/observeElement';

const { getSlotRef } = defineProps({
    getSlotRef: {
        type: Function as PropType<() => Ref<HTMLElement | null>>,
        default: () => {
            return () => null;
        }
    },
    wrapperClass: {
        type: String,
        default: () => ''
    },
    wrapperStyle: {
        type: Object as PropType<CSSProperties>,
        default: () => ({})
    },
    slotClass: {
        type: String,
        default: () => ''
    },
    slotStyle: {
        type: Object as PropType<CSSProperties>,
        default: () => ({})
    }
});

const isElementWasInViewPort = ref(false);

onMounted(() => {
    if (!isElementWasInViewPort.value) {
        observeElement(getSlotRef(), [isElementWasInViewPort]);
    }
});
</script>

<template>
    <div
        v-show="true"
        :class="[$style.wrapper, wrapperClass]"
        :style="wrapperStyle"
    >
        <div
            :class="[
                $style.slotWrapper,
                slotClass,
                isElementWasInViewPort && $style.slotWrapperEndAnimation
            ]"
            :style="slotStyle"
        >
            <slot></slot>
        </div>
        <div
            :class="[
                $style.animationDiv,
                isElementWasInViewPort && $style.animationDivEnd
            ]"
        ></div>
    </div>
</template>

<style lang="scss" module>
@import './styles.scss';
</style>
