<script setup lang="ts">
import { onUpdated, PropType, ref } from 'vue';
import Close from '@/shared/assets/svg/components/Close.vue';

import { Presence, Motion } from '@oku-ui/motion';

const props = defineProps({
    modalClass: {
        type: String
    },
    closeModal: {
        type: Function as PropType<() => void>,
        default: () => {}
    },
    modalOpened: {
        type: Boolean,
        default: () => false
    }
});

const slotWrapperRef = ref<HTMLElement | null>(null);

const handleClickOutside = (e: MouseEvent) => {
    if (
        slotWrapperRef?.value &&
        !slotWrapperRef.value.contains(e.target as Node)
    ) {
        props.closeModal();
    }
};

onUpdated(() => {
    document.body.style.overflowY = props.modalOpened ? 'hidden' : 'auto';

    props.modalOpened
        ? document.addEventListener('click', handleClickOutside, true)
        : document.removeEventListener('click', handleClickOutside, true);
});
</script>

<template>
    <Teleport to="body">
        <Presence>
            <Motion
                v-if="modalOpened"
                tag="div"
                :transition="{
                    duration: 0.3,
                    animationTimingFunction: 'ease'
                }"
                :initial="{ opacity: 0 }"
                :animate="{ opacity: 1 }"
                :exit="{ opacity: 0 }"
                :class="[$style.modalContainer, modalClass]"
            >
                <div ref="slotWrapperRef" :class="$style.slotWrapper">
                    <slot></slot>
                </div>
                <Close :class="$style.closeIcon" @click="closeModal" />
            </Motion>
        </Presence>
    </Teleport>
</template>

<style lang="scss" module>
@import './style.scss';
</style>
