<script setup lang="ts">
import { PropType } from 'vue';
import { TLink } from '@/modules/mainModule/components/projects/defaultData';

import TitleComponent from '@/shared/ui/components/title/index.vue';
import { titleTypesEnum } from '@/shared/ui/components/title/titleEnum';

import GitHub from '@/shared/assets/svg/components/GitHub.vue';
import GoTo from '@/shared/assets/svg/components/GoTo.vue';

const { longDesc } = defineProps({
    name: {
        type: String
    },
    image: {
        type: String
    },
    stackStr: {
        type: String
    },
    githubLink: {
        type: String as PropType<TLink>
    },
    projectLink: {
        type: String as PropType<TLink>,
        default: () => undefined
    },
    longDesc: {
        type: String
    }
});

const parsedLongDesc = longDesc?.split('\n');
</script>

<template>
    <div :class="$style.container">
        <img :class="$style.img" :src="image" alt="project img" />
        <div :class="$style.textsContainer">
            <div :class="$style.subTextsContainer">
                <TitleComponent
                    :with-dot="false"
                    :title-type="titleTypesEnum.h3"
                    >{{ name }}</TitleComponent
                >
                <p :class="$style.stackStr">{{ stackStr }}</p>
            </div>
            <div :class="$style.longDescContainer">
                <p
                    v-for="(descPart, index) in parsedLongDesc"
                    :key="index"
                    :class="$style.longDescPart"
                >
                    {{ descPart }}
                </p>
            </div>
            <div :class="$style.subTextsContainer">
                <TitleComponent
                    :with-dot="true"
                    :title-type="titleTypesEnum.h4"
                    >{{
                        $t('main.projects.modal.projectLinks')
                    }}</TitleComponent
                >
                <div :class="$style.links">
                    <a
                        :href="githubLink"
                        target="_blank"
                        rel="noreferrer noopener"
                        :class="$style.link"
                    >
                        <GitHub :width="'18px'" :height="'18px'" />
                        <span :class="$style.linkText">{{
                            $t('main.projects.modal.sourceCode')
                        }}</span>
                    </a>
                    <a
                        v-if="projectLink"
                        :href="projectLink"
                        target="_blank"
                        rel="noreferrer noopener"
                        :class="$style.link"
                    >
                        <GoTo :width="'18px'" :height="'18px'" />
                        <span :class="$style.linkText">{{
                            $t('main.projects.modal.liveProject')
                        }}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" module>
@import './styles.scss';
</style>
