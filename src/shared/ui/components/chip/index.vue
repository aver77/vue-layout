<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: true
    }
});
</script>

<template>
    <span :class="$style.chip">{{ text }}</span>
</template>

<style lang="scss" module>
@import './styles.scss';
</style>
