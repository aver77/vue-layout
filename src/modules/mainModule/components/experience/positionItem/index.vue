<script lang="ts" setup>
import type { PropType, Ref } from 'vue';

import WithAnimation from '@/components/HOCs/withAnimation/index.vue';
import Chip from '@/shared/ui/components/chip/index.vue';
import Line from '@/shared/ui/components/line/index.vue';
import TitleComponent from '@/shared/ui/components/title/index.vue';
import { titleTypesEnum } from '@/shared/ui/components/title/titleEnum';

defineProps({
    companyName: {
        type: String
    },
    position: {
        type: String
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    skills: {
        type: Array as PropType<string[]>
    },
    getParentRef: {
        type: Function as PropType<() => Ref<HTMLElement | null>>,
        default: () => {
            return () => null;
        }
    }
});

const boldSep = '__';
</script>

<template>
    <div :class="$style.container">
        <div :class="$style.infoContainer">
            <WithAnimation :get-slot-ref="getParentRef">
                <TitleComponent
                    :with-dot="false"
                    :title-type="titleTypesEnum.h4"
                    >{{ companyName }}</TitleComponent
                >
            </WithAnimation>
            <WithAnimation :get-slot-ref="getParentRef">
                <p :class="$style.text">{{ startDate }} - {{ endDate }}</p>
            </WithAnimation>
        </div>
        <div :class="$style.infoContainer">
            <WithAnimation :get-slot-ref="getParentRef">
                <TitleComponent
                    :with-dot="false"
                    :class="$style.position"
                    :title-type="titleTypesEnum.h5"
                    >{{ position }}</TitleComponent
                >
            </WithAnimation>
            <WithAnimation :get-slot-ref="getParentRef">
                <p :class="$style.text">{{ location }}</p>
            </WithAnimation>
        </div>
        <div :class="$style.descriptionContainer">
            <WithAnimation
                v-for="(descItem, index) in description?.split('\n')"
                :key="index"
                :wrapper-class="$style.text"
                :get-slot-ref="getParentRef"
            >
                <span
                    v-for="(descItemChunk, chunkIndex) in descItem.split(
                        new RegExp(`[${boldSep}]+`)
                    )"
                    :key="chunkIndex"
                    :class="[
                        descItem.includes(boldSep + descItemChunk + boldSep) &&
                            $style.boldText
                    ]"
                >
                    {{ descItemChunk.replace(new RegExp(`[${boldSep}]+`), '') }}
                </span>
            </WithAnimation>
        </div>
        <WithAnimation :get-slot-ref="getParentRef" :slot-class="$style.skills">
            <Chip
                v-for="(skill, index) in skills"
                :key="skill + index"
                :text="skill"
            />
        </WithAnimation>
        <Line :class="$style.line" />
    </div>
</template>

<style lang="scss" module>
@import './styles.scss';
</style>
