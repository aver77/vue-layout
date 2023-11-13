<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from "vue";

import { linkData, SidebarKeys } from "@/components/sidebar/defaultData";
import { useScrollSBStore } from "@/shared/libs/stores/scrollSBStore";

const store = useScrollSBStore();

const linkDataWithElements = reactive<Record<string, HTMLElement | null>>({});
const currentSelectedSidebarKey = ref<string | null>(null);
const isScrollLocked = ref(false);

const scrollListener = () => {
    const scrollY = window.scrollY;

    if (
        !isScrollLocked.value &&
        store.aboutScrollValue &&
        store.projectsScrollValue &&
        store.experienceScrollValue &&
        store.contactScrollValue
    ) {
        if (
            scrollY >= store.aboutScrollValue &&
            scrollY <= store.projectsScrollValue
        ) {
            currentSelectedSidebarKey.value = SidebarKeys.About;
        } else if (
            scrollY >= store.projectsScrollValue &&
            scrollY <= store.experienceScrollValue
        ) {
            currentSelectedSidebarKey.value = SidebarKeys.Projects;
        } else if (
            scrollY >= store.experienceScrollValue &&
            scrollY <= store.contactScrollValue
        ) {
            currentSelectedSidebarKey.value = SidebarKeys.Experience;
        } else if (scrollY >= store.contactScrollValue) {
            currentSelectedSidebarKey.value = SidebarKeys.Contact;
        } else {
            currentSelectedSidebarKey.value = null;
        }
    }
};

onMounted(() => {
    window.addEventListener("scroll", scrollListener);
});

onMounted(() => {
    Object.entries(linkData).forEach(([sidebarKey, id]) => {
        linkDataWithElements[sidebarKey] = document.getElementById(id);
    });
});

onUnmounted(() => {
    window.removeEventListener("scroll", scrollListener);
});

const scrollToTop = () => {
    isScrollLocked.value = true;
    window.scrollTo({ top: 0, behavior: "auto" });
    currentSelectedSidebarKey.value = null;
    isScrollLocked.value = false;
};
const scrollToElement = (element: HTMLElement, sidebarKey: string) => {
    isScrollLocked.value = true;
    element.scrollIntoView({ behavior: "auto" });
    currentSelectedSidebarKey.value = sidebarKey;
    isScrollLocked.value = false;
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
