<script setup lang="ts">
import ProjectItem from "./projectItem/index.vue";

import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import Line from "@/shared/ui/components/line/index.vue";
import { getProjects } from "@/modules/mainModule/components/projects/defaultData";
import { projectsId } from "@/shared/constants/elementsIds";
</script>

<template>
    <section :id="projectsId" :class="$style.container">
        <div :class="$style.titleWrap">
            <Line />
            <Title :with-dot="true" :title-type="titleTypesEnum.h2">{{
                $t("main.projects.title")
            }}</Title>
        </div>
        <div :class="$style.projectsWrap">
            <ProjectItem
                v-for="project in getProjects($t)"
                :key="project.name"
                v-bind="project"
            />
        </div>
    </section>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
