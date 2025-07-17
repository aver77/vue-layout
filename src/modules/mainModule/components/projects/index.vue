<script setup lang="ts">
import { ref } from 'vue';

import WithAnimation from '@/components/HOCs/withAnimation/index.vue';

import ProjectItem from './projectItem/index.vue';

import TitleComponent from '@/shared/ui/components/title/index.vue';
import { titleTypesEnum } from '@/shared/ui/components/title/titleEnum';

import Line from '@/shared/ui/components/line/index.vue';
import { projectsId } from '@/shared/constants/elementsIds';
import useContentfulData from '@/shared/hooks/useContentfulData';
import { fetchProjects } from '@/shared/api';

const target = ref<HTMLElement | null>(null);
const getTargetRef = () => target;

const projects = useContentfulData(fetchProjects);
</script>

<template>
    <section :id="projectsId" ref="target" :class="$style.container">
        <div :class="$style.titleWrap">
            <Line :flexed="true" />
            <WithAnimation :get-slot-ref="getTargetRef">
                <TitleComponent
                    :with-dot="true"
                    :title-type="titleTypesEnum.h2"
                    >{{ $t('main.projects.title') }}</TitleComponent
                >
            </WithAnimation>
        </div>
        <div :class="$style.projectsWrap">
            <ProjectItem
                v-for="(project, index) in projects"
                :key="index"
                v-bind="project.fields"
                :image="project.fields?.image?.fields?.file?.url"
                :get-parent-ref="getTargetRef"
            />
        </div>
    </section>
</template>

<style lang="scss" module>
@import './styles.scss';
</style>
