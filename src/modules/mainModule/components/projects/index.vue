<script setup lang="ts">
import ProjectItem from "./projectItem/index.vue";

import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import Line from "@/shared/ui/components/line/index.vue";
import { projects } from "@/modules/mainModule/components/projects/defaultData";
import { projectsId } from "@/shared/constants/elementsIds";
// import { useScrollSBStore } from "@/shared/libs/stores/scrollSBStore";
// import useSetScrollValue from "@/shared/libs/hooks/useSetScrollValue";

// const projectsRef = ref<HTMLElement | null>(null);
// const { setProjectsScrollValue } = useScrollSBStore();
//
// useSetScrollValue(projectsRef, setProjectsScrollValue);
</script>

<template>
    <section :id="projectsId" :class="$style.container">
        <div :class="$style.titleWrap">
            <Line :class="$style.line" />
            <Title :with-dot="true" :title-type="titleTypesEnum.h2"
                >Projects</Title
            >
        </div>
        <div :class="$style.projectsWrap">
            <ProjectItem
                v-for="project in projects"
                :key="project.name"
                v-bind="project"
            />
        </div>
    </section>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
