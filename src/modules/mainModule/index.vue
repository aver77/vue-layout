<script setup lang="ts">
import ShortInformation from './components/shortInformation/index.vue';
import About from './components/about/index.vue';
import Projects from './components/projects/index.vue';
import Experience from './components/experience/index.vue';
import Contact from './components/contact/index.vue';
</script>

<template>
    <div :class="$style.container">
        <ShortInformation />
        <About />
        <Projects />
        <Experience />
        <Contact />
    </div>
</template>

<style module lang="scss">
@import 'src/shared/styles/vars.scss';

.container {
    max-width: $layoutWidth;
    margin: auto;
}
</style>
