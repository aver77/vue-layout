<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { observeElement } from '@/shared/lib/utils/observeElement';
import { useGlobalContentfulData } from '@/shared/providers/globalContentfulDataProvider';
import { getLinksWithComponents } from './defaultData';

defineProps({
    heading: {
        type: Boolean,
        default: () => false
    }
});

const isElementWasInViewPort = ref(false);
const linksRef = ref(null);

onMounted(() => {
    if (!isElementWasInViewPort.value) {
        observeElement(linksRef, [isElementWasInViewPort]);
    }
});

const { links } = useGlobalContentfulData();

const linksStructure = getLinksWithComponents(
    links.value?.githubUrl as string,
    links.value?.linkedinUrl as string,
    links.value?.codewarsUrl as string
);
</script>

<template>
    <div ref="linksRef" :class="$style.linksSection">
        <a
            v-for="({ link, linkComponent }, index) in linksStructure"
            :key="link"
            :href="link"
            target="_blank"
            rel="noreferrer noopener"
            :style="{ 'transition-duration': `${0.3 * (index + 1)}s` }"
            :class="[
                heading && $style.linkInitial,
                heading && isElementWasInViewPort && $style.linkAnimated
            ]"
        >
            <component
                :is="linkComponent"
                :class-name="$style.linkImage"
            ></component>
        </a>
    </div>
</template>

<style lang="scss" module>
@import './styles.scss';
</style>
