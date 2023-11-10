<script setup lang="ts">
import ProjectItem from "./projectItem/index.vue";

import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import Line from "@/shared/ui/components/line/index.vue";
import { projects } from "@/modules/mainModule/components/projects/defaultData";
import { projectsId } from "@/shared/constants/elementsIds";
</script>

<template>
    <div :id="projectsId" :class="$style.container">
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
    </div>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
