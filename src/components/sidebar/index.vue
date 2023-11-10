<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

import { linkData } from "@/components/sidebar/defaultData";

const linkDataWithElements = reactive<Record<string, HTMLElement | null>>({});
const currentSelectedSidebarKey = ref<string | null>(null);

onMounted(() => {
    Object.entries(linkData).forEach(([sidebarKey, id]) => {
        linkDataWithElements[sidebarKey] = document.getElementById(id);
    });
});

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    currentSelectedSidebarKey.value = null;
};
const scrollToElement = (element: HTMLElement, sidebarKey: string) => {
    element.scrollIntoView({ behavior: "smooth" });
    currentSelectedSidebarKey.value = sidebarKey;
};
</script>

<template>
    <aside :class="$style.container">
        <div :class="$style.logoSection" @click="scrollToTop">
            <div :class="$style.logoWrap">
                <span :class="$style.logoText">NW</span>
            </div>
        </div>
        <nav :class="$style.nav">
            <div
                v-for="([sidebarKey, element], index) in Object.entries(
                    linkDataWithElements
                )"
                :key="index"
                :class="[
                    $style.linkWrapper,
                    currentSelectedSidebarKey === sidebarKey &&
                        $style.withBorder
                ]"
                @click="scrollToElement(element, sidebarKey)"
            >
                <a :class="$style.link">{{ sidebarKey }}</a>
            </div>
        </nav>
    </aside>
</template>

<style lang="scss" module scoped>
@import "./styles.scss";
</style>
