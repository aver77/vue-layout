<script lang="ts" setup>
import { CSSProperties, onMounted, PropType, Ref, ref } from "vue";

const { getSlotRef } = defineProps({
    getSlotRef: {
        type: Function as PropType<() => Ref<HTMLElement | null>>,
        default: () => {
            return () => null;
        }
    },
    wrapperClass: {
        type: String,
        default: () => ""
    },
    wrapperStyle: {
        type: Object as PropType<CSSProperties>,
        default: () => ({})
    }
});

const isElementWasInViewPort = ref(false);

onMounted(() => {
    if (!isElementWasInViewPort.value && getSlotRef()) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((el) => {
                if (el.isIntersecting) {
                    isElementWasInViewPort.value = true;
                }
            });
        });
        observer.observe(getSlotRef().value as Element);
    }
});
</script>

<template>
    <div
        :class="[
            $style.wrapper,
            wrapperClass,
            isElementWasInViewPort && $style.wrapperEndAnimation
        ]"
        :style="wrapperStyle"
    >
        <slot></slot>
        <div
            :class="[
                $style.animationDiv,
                isElementWasInViewPort && $style.animationDivEnd
            ]"
        ></div>
    </div>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
