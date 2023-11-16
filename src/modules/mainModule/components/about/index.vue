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
            <Title :with-dot="true" :title-type="titleTypesEnum.h2"
                >About</Title
            >
            <Line />
        </div>
        <div :class="$style.infoContainer">
            <div>
                <p :class="$style.text">
                    My expertise covers many different areas: I developed client
                    parts of high-load product web applications, led the
                    development of a small team, took part in creating the front
                    end for startup projects, and also created custom web
                    applications. The skills I have acquired allow me to quickly
                    delve into any project and make tangible contributions and
                    ideas.
                </p>
                <p :class="$style.text">
                    I am well versed in design, responsive cross-browser layout,
                    front-end architecture and working with external APIs. As a
                    stack I prefer React.js / Next.js + Typescript. I have also
                    worked with various ready-made solutions such as Wordpress,
                    Service Manager, as well as low-code platforms.
                </p>
                <p :class="$style.text">
                    I am continuously expanding my horizons in development and
                    Computer Science, developing backend on microservice
                    architecture, using Node.js, Express.js, MongoDB, Docker.
                    And also, working with various front-end frameworks, such as
                    Next.js, Vue.js, Svelte.js.
                </p>
                <p :class="$style.text">
                    I have excellent communication skills and am always open to
                    new professional acquaintances!
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
    </section>
</template>

<style module lang="scss">
@import "./styles.scss";
</style>
