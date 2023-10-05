<script setup lang="ts">
const linkData = ["About", "Projects", "Experience", "Contact"];
</script>

<template>
    <aside :class="$style.container">
        <div :class="$style.logoSection">
            <div :class="$style.logoWrap">
                <span :class="$style.logoText">NW</span>
            </div>
        </div>
        <nav :class="$style.nav">
            <div
                v-for="(linkItem, index) in linkData"
                :key="index"
                :class="$style.linkWrapper"
            >
                <a :class="$style.link">{{ linkItem }}</a>
            </div>
        </nav>
    </aside>
</template>

<style lang="scss" module scoped>
@import "./styles.scss";
</style>
