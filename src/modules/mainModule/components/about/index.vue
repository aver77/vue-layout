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
    <div :id="aboutId" :class="$style.container">
        <div :class="$style.titleWrap">
            <Title :with-dot="true" :title-type="titleTypesEnum.h2"
                >About</Title
            >
            <Line :class="$style.line" />
        </div>
        <div :class="$style.infoContainer">
            <div>
                <p :class="$style.text">
                    Hey! I'm Bob, if you haven't already gathered that by now.
                    I'm a painter turned software engineer from Daytona,
                    Florida. I specialize in the backend, primarily Node and
                    Rust, but love building with whatever tools are right for
                    the job.
                </p>
                <p :class="$style.text">
                    I currently work for Google on Google Photos. I also toss in
                    my ¢2 with the design systems teams from time to time (once
                    an artist, always an artist, amirite?).
                </p>
                <p :class="$style.text">
                    Outside of work, I still love to paint. Any given Sunday
                    you'll find me scribbling some happy clouds with my son ☁️ I
                    even teach courses online if you're looking to learn!
                </p>
                <p :class="$style.text">
                    I'm passively looking for new positions where I can merge my
                    love for code with my love for the canvas. If you think
                    you've got an opening that I might like, let's connect 🔗
                </p>
                <div :class="$style.linksContainer">
                    <div :class="$style.linksArrowSection">
                        <span :class="$style.myLinks">My Links</span>
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
    </div>
</template>

<style module lang="scss">
@import "./styles.scss";
</style>
