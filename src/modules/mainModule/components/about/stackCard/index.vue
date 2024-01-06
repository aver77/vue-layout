<script setup lang="ts">
import { PropType, Ref } from 'vue';

import WithAnimation from '@/components/HOCs/withAnimation/index.vue';

import {
    getImgAndStackByKey,
    getTitleByKeyAndT,
    stackKeysEnum
} from './defaultData';

import TitleComponent from '@/shared/ui/components/title/index.vue';
import { titleTypesEnum } from '@/shared/ui/components/title/titleEnum';

import Chip from '@/shared/ui/components/chip/index.vue';

const { stackKey } = defineProps({
    stackKey: {
        type: String as PropType<stackKeysEnum>,
        default: () => stackKeysEnum.WORK
    },
    getParentRef: {
        type: Function as PropType<() => Ref<HTMLElement | null>>,
        default: () => {
            return () => null;
        }
    }
});

const { currentStack, imgComponent } = getImgAndStackByKey(stackKey);
</script>

<template>
    <WithAnimation :get-slot-ref="getParentRef">
        <div :class="$style.titleContainer">
            <component :is="imgComponent" :class="$style.img"></component>
            <TitleComponent :title-type="titleTypesEnum.h4" :with-dot="false">{{
                getTitleByKeyAndT(stackKey, $t)
            }}</TitleComponent>
        </div>
        <div :class="$style.stackContainer">
            <template v-for="(stName, index) in currentStack" :key="index">
                <Chip :text="stName" />
            </template>
        </div>
    </WithAnimation>
</template>

<style module lang="scss">
@import './styles.scss';
</style>
