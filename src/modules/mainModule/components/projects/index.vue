<script setup lang="ts">
import { ref } from "vue";

import WithAnimation from "@/components/HOCs/withAnimation/index.vue";

import ProjectItem from "./projectItem/index.vue";

import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import Line from "@/shared/ui/components/line/index.vue";
import { getProjects } from "@/modules/mainModule/components/projects/defaultData";
import { projectsId } from "@/shared/constants/elementsIds";

const target = ref<HTMLElement | null>(null);
const getTargetRef = () => target;
</script>

<template>
    <section ref="target" :id="projectsId" :class="$style.container">
        <div :class="$style.titleWrap">
            <Line />
            <WithAnimation :get-slot-ref="getTargetRef">
                <Title :with-dot="true" :title-type="titleTypesEnum.h2">{{
                    $t("main.projects.title")
                }}</Title>
            </WithAnimation>
        </div>
        <div :class="$style.projectsWrap">
            <ProjectItem
                v-for="project in getProjects($t)"
                :key="project.name"
                v-bind="project"
                :get-parent-ref="getTargetRef"
            />
        </div>
    </section>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
