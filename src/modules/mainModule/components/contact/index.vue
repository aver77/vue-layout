<script setup lang="ts">
import { ref } from 'vue';

import WithAnimation from '@/components/HOCs/withAnimation/index.vue';

import TitleComponent from '@/shared/ui/components/title/index.vue';
import { titleTypesEnum } from '@/shared/ui/components/title/titleEnum';

import Mail from '@/shared/assets/svg/components/Mail.vue';

import { contactsId } from '@/shared/constants/elementsIds';
import { useGlobalContentfulData } from '@/shared/providers/globalContentfulDataProvider';

const target = ref<HTMLElement | null>(null);
const getTargetRef = () => target;

const { links } = useGlobalContentfulData();
</script>

<template>
    <section :id="contactsId" ref="target" :class="$style.container">
        <div :class="$style.contentWrap">
            <WithAnimation :get-slot-ref="getTargetRef">
                <TitleComponent :title-type="titleTypesEnum.h1">{{
                    $t('main.contact.title')
                }}</TitleComponent>
            </WithAnimation>
            <WithAnimation :get-slot-ref="getTargetRef">
                <p :class="[$style.contactMsg, $style.lightText]">
                    {{ $t('main.contact.messageStart') }}
                    <a
                        :class="$style.link"
                        :href="links?.linkedinUrl"
                        target="_blank"
                        rel="noreferrer noopener"
                        >LinkedIn</a
                    >
                    {{ $t('main.contact.messageDivider') }}
                    <a
                        :class="$style.link"
                        :href="links?.telegramUrl"
                        target="_blank"
                        rel="noreferrer noopener"
                        >Telegram</a
                    >
                    {{ $t('main.contact.messageEnd') }}
                </p>
            </WithAnimation>
            <WithAnimation :get-slot-ref="getTargetRef">
                <a
                    :class="[$style.lightText, $style.mail]"
                    :href="`mailto:${links?.email}`"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Mail :class="$style.mailIcon" />
                    <span>{{ links?.email }}</span>
                </a>
            </WithAnimation>
        </div>
    </section>
</template>

<style lang="scss" module>
@import './styles.scss';
</style>
