<script setup lang="ts">
import { PropType, ref } from "vue";
import { TLink } from "../defaultData";

import WithModal from "@/components/HOCs/withModal/index.vue";
import Modal from "./modal/index.vue";

import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import Line from "@/shared/ui/components/line/index.vue";
import GitHub from "@/shared/assets/svg/components/GitHub.vue";
import GoTo from "@/shared/assets/svg/components/GoTo.vue";

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

const modalOpened = ref(false);

const onOpenModal = () => (modalOpened.value = true);
const onCloseModal = () => (modalOpened.value = false);
</script>

<template>
    <div :class="$style.container">
        <div :class="$style.imgContainer" @click="onOpenModal">
            <img :src="image" :class="$style.img" alt="project image" />
        </div>
        <div :class="$style.textsContainer">
            <Title
                :with-dot="false"
                :title-type="titleTypesEnum.h4"
                :class="$style.title"
                >{{ name }}</Title
            >
            <div :class="$style.linksContainer">
                <Line :class="$style.line" />
                <a :href="githubLink" target="_blank" rel="noreferrer noopener">
                    <GitHub :class="$style.linkSvg" />
                </a>
                <a
                    v-if="projectLink"
                    :href="projectLink"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <GoTo :class="$style.linkSvg" />
                </a>
            </div>
            <p :class="$style.stackStr">{{ stackStr }}</p>
            <div :class="$style.shortDescContainer">
                <span :class="$style.shortDesc">{{ shortDesc }}</span>
                <span :class="$style.learnMore" @click="onOpenModal">
                    Learn more ➤
                </span>
            </div>
        </div>
    </div>
    <WithModal v-if="modalOpened" :closeModal="onCloseModal">
        <Modal
            :name="name"
            :stackStr="stackStr"
            :github-link="githubLink"
            :project-link="projectLink"
            :long-desc="longDesc"
            :image="image"
        />
    </WithModal>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
