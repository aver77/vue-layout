<script setup lang="ts">
import { PropType } from "vue";
import { TLink } from "../defaultData";

import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import Line from "@/shared/ui/components/line/index.vue";

const { stack } = defineProps({
    image: {
        type: String
    },
    name: {
        type: String
    },
    stack: {
        type: Array as PropType<string[]>
    },
    githubLink: {
        type: String as PropType<TLink>
    },
    projectLink: {
        type: String as PropType<TLink>,
        default: undefined
    },
    shortDesc: {
        type: String
    },
    longDesc: {
        type: String
    }
});

const stackStr = stack?.join(" - ");
</script>

<template>
    <div :class="$style.container">
        <div :class="$style.imgContainer">
            <img :src="image" alt="project image" />
        </div>
        <div :class="$style.textsContainer">
            <div>
                <Title
                    :with-dot="false"
                    :title-type="titleTypesEnum.h4"
                    :class="$style.title"
                    >{{ name }}</Title
                >
                <Line />
            </div>
            <p :class="$style.stackStr">{{ stackStr }}</p>
            <div :class="$style.shortDescContainer">
                <span :class="$style.shortDesc">{{ shortDesc }}</span>
                <span :class="$style.learnMore">Learn more ></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
