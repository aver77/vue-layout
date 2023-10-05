<script lang="ts">
import { defineComponent } from "vue";

import ButtonComponent from "@/shared/ui/components/button/index.vue";
import GitHub from "@/shared/assets/svg/components/GitHub.vue";
import LinkedIn from "@/shared/assets/svg/components/LinkedIn.vue";
import CodeWars from "@/shared/assets/svg/components/CodeWars.vue";

export default defineComponent({
    components: { ButtonComponent, CodeWars, LinkedIn, GitHub },
    setup() {
        const linksArray = [
            {
                link: "https://github.com/aver77",
                linkComponent: GitHub
            },
            {
                link: "https://www.linkedin.com/in/nikita-averochkin-761917276/",
                linkComponent: LinkedIn
            },
            {
                link: "https://www.linkedin.com/in/nikita-averochkin-761917276/",
                linkComponent: CodeWars
            }
        ];

        return {
            linksArray
        };
    }
});
</script>

<template>
    <header :class="$style.container">
        <div :class="$style.linksSection">
            <a
                v-for="{ link, linkComponent } in linksArray"
                :key="link"
                :href="link"
                target="_blank"
                rel="noreferrer noopener"
            >
                <component
                    v-bind:is="linkComponent"
                    v-bind:className="$style.linkImage"
                ></component>
            </a>
        </div>
        <ButtonComponent>My Resume</ButtonComponent>
    </header>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
