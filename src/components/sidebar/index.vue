<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from "vue";

import { linkData, SidebarKeys } from "@/components/sidebar/defaultData";
import {
    aboutId,
    contactsId,
    experienceId,
    projectsId,
    shortInformationId
} from "@/shared/constants/elementsIds";
import { isElementInViewport } from "@/components/sidebar/utils";

const linkDataWithElements = reactive<Record<string, HTMLElement | null>>({});
const currentSelectedSidebarKey = ref<string | null>(null);
const isScrollLocked = ref(false);

const scrollListener = () => {
    if (
        isElementInViewport(document.getElementById(shortInformationId), false)
    ) {
        currentSelectedSidebarKey.value = null;
    } else {
        if (isElementInViewport(document.getElementById(contactsId))) {
            currentSelectedSidebarKey.value = SidebarKeys.Contact;
        } else if (isElementInViewport(document.getElementById(experienceId))) {
            currentSelectedSidebarKey.value = SidebarKeys.Experience;
        } else if (isElementInViewport(document.getElementById(projectsId))) {
            currentSelectedSidebarKey.value = SidebarKeys.Projects;
        } else if (isElementInViewport(document.getElementById(aboutId))) {
            currentSelectedSidebarKey.value = SidebarKeys.About;
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
                        $style.highlighted
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
