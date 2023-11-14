<script setup lang="ts">
import { onMounted, onUnmounted, PropType, ref } from "vue";
import Close from "@/shared/assets/svg/components/Close.vue";

const { closeModal } = defineProps({
    modalClass: {
        type: String
    },
    closeModal: {
        type: Function as PropType<() => void>,
        default: () => {}
    }
});

const slotWrapperRef = ref<HTMLElement | null>(null);

const handleClickOutside = (e: any) => {
    if (slotWrapperRef?.value && !slotWrapperRef.value.contains(e.target)) {
        closeModal();
    }
};

onMounted(() => {
    document.body.style.overflowY = "hidden";

    document.addEventListener("click", handleClickOutside, true);
});

onUnmounted(() => {
    document.body.style.overflowY = "auto";

    document.removeEventListener("click", handleClickOutside, true);
});
</script>

<template>
    <teleport to="#app"
        ><div :class="[$style.modalContainer, modalClass]">
            <div ref="slotWrapperRef" :class="$style.slotWrapper">
                <slot></slot>
            </div>
            <Close :class="$style.closeIcon" @click="closeModal" /></div
    ></teleport>
</template>

<style lang="scss" module>
@import "./style.scss";
</style>
