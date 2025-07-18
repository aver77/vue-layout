<script setup lang="ts">
import Footer from '@/components/footer/index.vue';
import Header from '@/components/header/index.vue';
import Sidebar from '@/components/sidebar/index.vue';
</script>

<template>
    <div :class="$style.container">
        <Sidebar />
        <div :class="$style.content">
            <Header />
            <main :class="$style.main">
                <slot></slot>
            </main>
            <Footer />
        </div>
    </div>
</template>

<style lang="scss" module>
@import './styles.scss';
</style>
