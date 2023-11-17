<script setup lang="ts">
import { links } from "./defaultData";
</script>

<template>
    <div :class="$style.linksSection">
        <a
            v-for="{ link, linkComponent } in links"
            :key="link"
            :href="link"
            target="_blank"
            rel="noreferrer noopener"
        >
            <component
                :is="linkComponent"
                :class-name="$style.linkImage"
            ></component>
        </a>
    </div>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
