<script lang="ts" setup>
import { PropType } from "vue";

import Chip from "@/shared/ui/components/chip/index.vue";
import Line from "@/shared/ui/components/line/index.vue";

import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

const { description } = defineProps({
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
        type: String,
        default: "Present"
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    skills: {
        type: Array as PropType<string[]>
    }
});

const parsedDescription = description?.split("\n");
</script>

<template>
    <div :class="$style.container">
        <div :class="$style.infoContainer">
            <Title :with-dot="false" :title-type="titleTypesEnum.h4">{{
                companyName
            }}</Title>
            <p :class="$style.text">{{ startDate }} - {{ endDate }}</p>
        </div>
        <div :class="$style.infoContainer">
            <Title
                :with-dot="false"
                :class="$style.position"
                :title-type="titleTypesEnum.h5"
                >{{ position }}</Title
            >
            <p :class="$style.text">{{ location }}</p>
        </div>
        <div :class="$style.descriptionContainer">
            <p
                v-for="(desc, index) in parsedDescription"
                :class="$style.text"
                :key="index"
            >
                {{ desc }}
            </p>
        </div>
        <div :class="$style.skills">
            <Chip
                v-for="(skill, index) in skills"
                :text="skill"
                :key="skill + index"
            />
        </div>
        <Line :class="$style.line" />
    </div>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
