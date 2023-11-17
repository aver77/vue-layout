<script setup lang="ts">
import StackCard from "./stackCard/index.vue";
import { stackKeysEnum } from "./stackCard/defaultData";

import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import Line from "@/shared/ui/components/line/index.vue";
import Links from "@/components/links/index.vue";
import Arrow from "@/shared/assets/svg/components/Arrow.vue";

import { aboutId } from "@/shared/constants/elementsIds";
</script>

<template>
    <section :id="aboutId" :class="$style.container">
        <div :class="$style.titleWrap">
            <Title :with-dot="true" :title-type="titleTypesEnum.h2">{{
                $t("main.about.title")
            }}</Title>
            <Line :class="$style.line" />
        </div>
        <div :class="$style.infoContainer">
            <div>
                <p
                    v-for="(infoText, index) in $t(
                        'main.about.information'
                    ).split('\n')"
                    :key="index"
                    :class="$style.text"
                >
                    {{ infoText }}
                </p>
                <div :class="$style.linksContainer">
                    <div :class="$style.linksArrowSection">
                        <span :class="$style.myLinks">{{
                            $t("main.about.myLinks")
                        }}</span>
                        <Arrow :class="$style.arrow" />
                    </div>
                    <Links />
                </div>
            </div>
            <div :class="$style.stackWrap">
                <StackCard :stack-key="stackKeysEnum.WORK" />
                <StackCard :stack-key="stackKeysEnum.PERSONAL_FRONT" />
                <StackCard :stack-key="stackKeysEnum.PERSONAL_BACK" />
            </div>
        </div>
    </section>
</template>

<style module lang="scss">
@import "./styles.scss";
</style>
