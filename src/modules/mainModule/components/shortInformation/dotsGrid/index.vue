<script setup lang="ts">
import gridArray from './gridData';
</script>

<template>
    <div :class="$style.container">
        <div
            v-for="(_, index) in gridArray"
            :key="index"
            :class="$style.dotContainer"
        >
            <div :class="$style.dot" />
        </div>
    </div>
</template>

<style module lang="scss">
@import './styles.scss';
</style>
