<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue';

import { linkData } from '@/components/sidebar/defaultData';
import { SidebarKeys } from '@/shared/constants/enums/sidebarKeys';
import {
    aboutId,
    contactsId,
    experienceId,
    projectsId,
    shortInformationId
} from '@/shared/constants/elementsIds';
import {
    isElementInViewport,
    scrollIntoViewAndWait
} from '@/components/sidebar/utils';
import { observeElement } from '@/shared/lib/utils/observeElement';

const linkDataWithElements = reactive<Record<string, HTMLElement | null>>({});
const currentSelectedSidebarKey = ref<string | null>(null);

const isScrollBlocked = ref(false);

const isElementWasInViewPort = ref(false);
const sidebarRef = ref(null);

const scrollListener = () => {
    if (!isScrollBlocked.value) {
        if (
            isElementInViewport(
                document.getElementById(shortInformationId),
                false
            )
        ) {
            currentSelectedSidebarKey.value = null;
        } else {
            if (isElementInViewport(document.getElementById(contactsId))) {
                currentSelectedSidebarKey.value = SidebarKeys.Contact;
            } else if (
                isElementInViewport(document.getElementById(experienceId))
            ) {
                currentSelectedSidebarKey.value = SidebarKeys.Experience;
            } else if (
                isElementInViewport(document.getElementById(projectsId))
            ) {
                currentSelectedSidebarKey.value = SidebarKeys.Projects;
            } else if (isElementInViewport(document.getElementById(aboutId))) {
                currentSelectedSidebarKey.value = SidebarKeys.About;
            }
        }
    }
};

onMounted(() => {
    if (!isElementWasInViewPort.value) {
        observeElement(sidebarRef, [isElementWasInViewPort]);
    }
});

onMounted(() => {
    window.addEventListener('scroll', scrollListener);

    Object.entries(linkData).forEach(([sidebarKey, id]) => {
        linkDataWithElements[sidebarKey] = document.getElementById(id);
    });
});

onUnmounted(() => {
    window.removeEventListener('scroll', scrollListener);
});

const scrollToTop = () => {
    isScrollBlocked.value = true;
    scrollIntoViewAndWait().then(() => {
        currentSelectedSidebarKey.value = null;
        isScrollBlocked.value = false;
    });
};
const scrollToElement = (element: HTMLElement, sidebarKey: string) => {
    isScrollBlocked.value = true;
    scrollIntoViewAndWait(element).then(() => {
        currentSelectedSidebarKey.value = sidebarKey;
        isScrollBlocked.value = false;
    });
};
</script>

<template>
    <aside ref="sidebarRef" :class="$style.container">
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
                :style="{ 'transition-duration': `${0.2 * (index + 1)}s` }"
                :class="[
                    $style.linkWrapper,
                    isElementWasInViewPort && $style.linkAnimated,
                    !isScrollBlocked &&
                        currentSelectedSidebarKey === sidebarKey &&
                        $style.highlighted
                ]"
                @click="scrollToElement(element, sidebarKey)"
            >
                <a :class="$style.link">{{
                    $t(`components.sidebar.${sidebarKey}`)
                }}</a>
            </div>
        </nav>
    </aside>
</template>

<style lang="scss" module scoped>
@import './styles.scss';
</style>
