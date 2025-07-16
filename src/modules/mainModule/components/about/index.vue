<script setup lang="ts">
import WithAnimation from '@/components/HOCs/withAnimation/index.vue';

import StackCard from './stackCard/index.vue';
import { stackKeysEnum } from './stackCard/defaultData';

import TitleComponent from '@/shared/ui/components/title/index.vue';
import { titleTypesEnum } from '@/shared/ui/components/title/titleEnum';

import Line from '@/shared/ui/components/line/index.vue';
import Links from '@/components/links/index.vue';
import Arrow from '@/shared/assets/svg/components/Arrow.vue';

import { aboutId } from '@/shared/constants/elementsIds';
import { ref } from 'vue';
import useContentfulData from '@/shared/hooks/useContentfulData';
import { fetchAbout } from '@/shared/api';
import type { IAbout } from '@/shared/ts/contentful';

const target = ref<HTMLElement | null>(null);
const getTargetRef = () => target;

const about = useContentfulData<IAbout>(fetchAbout);
</script>

<template>
    <section :id="aboutId" ref="target" :class="$style.container">
        <div :class="$style.titleWrap">
            <WithAnimation :get-slot-ref="getTargetRef">
                <TitleComponent
                    :with-dot="true"
                    :title-type="titleTypesEnum.h2"
                    >{{ $t('main.about.title') }}</TitleComponent
                >
            </WithAnimation>
            <Line :flexed="true" />
        </div>
        <div :class="$style.infoContainer">
            <div>
                <WithAnimation
                    v-for="(infoText, index) in about?.information?.split('\n')"
                    :key="index"
                    :wrapper-class="$style.text"
                    :get-slot-ref="getTargetRef"
                >
                    {{ infoText }}
                </WithAnimation>
                <WithAnimation :get-slot-ref="getTargetRef">
                    <div :class="$style.linksContainer">
                        <div :class="$style.linksArrowSection">
                            <span :class="$style.myLinks">{{
                                $t('main.about.myLinks')
                            }}</span>
                            <Arrow :class="$style.arrow" />
                        </div>
                        <Links />
                    </div>
                </WithAnimation>
            </div>
            <div :class="$style.stackWrap">
                <StackCard
                    :stack-key="stackKeysEnum.WORK"
                    :current-stack="about?.workUsage"
                    :get-parent-ref="getTargetRef"
                />
                <StackCard
                    :stack-key="stackKeysEnum.PERSONAL_FRONT"
                    :current-stack="about?.personalUsage"
                    :get-parent-ref="getTargetRef"
                />
                <StackCard
                    :stack-key="stackKeysEnum.PERSONAL_BACK"
                    :current-stack="about?.personalBackendUsage"
                    :get-parent-ref="getTargetRef"
                />
            </div>
        </div>
    </section>
</template>

<style module lang="scss">
@import './styles.scss';
</style>
