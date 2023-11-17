<script setup lang="ts">
import Title from "@/shared/ui/components/title/index.vue";
import { titleTypesEnum } from "@/shared/ui/components/title/titleEnum";

import Mail from "@/shared/assets/svg/components/Mail.vue";

import { contactsId } from "@/shared/constants/elementsIds";
</script>

<template>
    <section :id="contactsId" :class="$style.container">
        <div :class="$style.contentWrap">
            <Title :title-type="titleTypesEnum.h1">{{
                $t("main.contact.title")
            }}</Title>
            <p :class="[$style.contactMsg, $style.lightText]">
                {{ $t("main.contact.messageStart") }}
                <a
                    :class="$style.link"
                    href="https://www.linkedin.com/in/nikita-averochkin-761917276/"
                    target="_blank"
                    rel="noreferrer noopener"
                    >LinkedIn</a
                >
                {{ $t("main.contact.messageDivider") }}
                <a
                    :class="$style.link"
                    href="https://t.me/NikitaNWB"
                    target="_blank"
                    rel="noreferrer noopener"
                    >Telegram</a
                >
                {{ $t("main.contact.messageEnd") }}
            </p>
            <a
                :class="[$style.lightText, $style.mail]"
                href="mailto:aser-14@bk.ru"
                target="_blank"
                rel="noreferrer noopener"
            >
                <Mail :class="$style.mailIcon" />
                <span>aser-14@bk.ru</span>
            </a>
        </div>
    </section>
</template>

<style lang="scss" module>
@import "./styles.scss";
</style>
