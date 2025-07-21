<script setup lang="ts">
import { ref } from 'vue';

import WithAnimation from '@/components/HOCs/withAnimation/index.vue';
import { fetchExperience } from '@/shared/api';
import { experienceId } from '@/shared/constants/elementsIds';
import useContentfulData from '@/shared/hooks/useContentfulData';
import { sortContentfulArrays } from '@/shared/lib/utils/sortContentfulArrays';
import Line from '@/shared/ui/components/line/index.vue';
import TitleComponent from '@/shared/ui/components/title/index.vue';
import { titleTypesEnum } from '@/shared/ui/components/title/titleEnum';
import PositionItem from './positionItem/index.vue';

const target = ref<HTMLElement | null>(null);
const getTargetRef = () => target;

const positions = useContentfulData(fetchExperience);
</script>

<template>
    <section :id="experienceId" ref="target" :class="$style.container">
        <div :class="$style.titleWrap">
            <WithAnimation :get-slot-ref="getTargetRef">
                <TitleComponent :with-dot="true" :title-type="titleTypesEnum.h2"
                    >{{ $t('main.experience.title') }}
                </TitleComponent>
            </WithAnimation>
            <Line :flexed="true" />
        </div>
        <div :class="$style.positionsWrap">
            <PositionItem
                v-for="(position, index) in sortContentfulArrays(positions)"
                :key="index"
                v-bind="position.fields"
                :get-parent-ref="getTargetRef"
            />
        </div>
    </section>
</template>

<style lang="scss" module>
@import './styles.scss';
</style>
