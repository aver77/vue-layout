<script setup lang="ts">
import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import Mail from "@/shared/assets/svg/components/Mail.vue";

import { contactsId } from "@/shared/constants/elementsIds";
</script>

<template>
    <div :id="contactsId" :class="$style.container">
        <div :class="$style.contentWrap">
            <Title :title-type="titleTypesEnum.h1">Contact</Title>
            <p :class="[$style.contactMsg, $style.lightText]">
                Shoot me an email if you want to connect! You can also find me
                on
                <a
                    :class="$style.link"
                    href="https://www.linkedin.com/in/nikita-averochkin-761917276/"
                    target="_blank"
                    rel="noreferrer noopener"
                    >LinkedIn</a
                >
                or
                <a
                    :class="$style.link"
                    href="https://t.me/NikitaNWB"
                    target="_blank"
                    rel="noreferrer noopener"
                    >Telegram</a
                >
                if that's more your speed.
            </p>
            <a
                :class="[$style.lightText, $style.mail]"
                href="mailto:aser-14@bk.ru"
            >
                <Mail :class="$style.mailIcon" />
                <span>aser-14@bk.ru</span>
            </a>
        </div>
    </div>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
