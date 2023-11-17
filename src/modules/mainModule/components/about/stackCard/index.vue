<script setup lang="ts">
import { PropType } from "vue";
import {
    getImgAndStackByKey,
    getTitleByKeyAndT,
    stackKeysEnum
} from "./defaultData";

import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import Chip from "@/shared/ui/components/chip/index.vue";

const { stackKey } = defineProps({
    stackKey: {
        type: String as PropType<stackKeysEnum>,
        default: stackKeysEnum.WORK
    }
});

const { currentStack, imgComponent } = getImgAndStackByKey(stackKey);
</script>

<template>
    <div>
        <div :class="$style.titleContainer">
            <component :is="imgComponent" :class="$style.img"></component>
            <Title :title-type="titleTypesEnum.h4" :with-dot="false">{{
                getTitleByKeyAndT(stackKey, $t)
            }}</Title>
        </div>
        <div :class="$style.stackContainer">
            <template v-for="(stName, index) in currentStack" :key="index">
                <Chip :text="stName" />
            </template>
        </div>
    </div>
</template>

<style module lang="scss">
@import "./styles.scss";
</style>
