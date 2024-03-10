<script setup lang="ts">
import { ref } from 'vue';
import WithAnimation from '@/components/HOCs/withAnimation/index.vue';

import ButtonComponent from '@/shared/ui/components/button/index.vue';
import buttonTypesEnum from '@/shared/ui/components/button/buttonTypesEnum';

import TitleComponent from '@/shared/ui/components/title/index.vue';
import { titleTypesEnum } from '@/shared/ui/components/title/titleEnum';

import DotsGrid from './dotsGrid/index.vue';
import { shortInformationId } from '@/shared/constants/elementsIds';

const target = ref<HTMLElement | null>(null);
const getTargetRef = () => target;
</script>

<template>
    <section :id="shortInformationId" ref="target" :class="$style.container">
        <div :class="$style.infoWrapper">
            <WithAnimation :get-slot-ref="getTargetRef">
                <TitleComponent :title-type="titleTypesEnum.h1">{{
                    $t('main.shortInformation.nameGreet')
                }}</TitleComponent>
            </WithAnimation>
            <WithAnimation :get-slot-ref="getTargetRef">
                <TitleComponent
                    :title-type="titleTypesEnum.h3"
                    :with-dot="false"
                >
                    {{ $t('shared.i') }}
                    <span :class="$style.titleJob">
                        {{ $t('main.shortInformation.jobTitle') }}
                    </span>
                </TitleComponent>
            </WithAnimation>
            <WithAnimation :get-slot-ref="getTargetRef">
                <p :class="$style.description">
                    {{ $t('main.shortInformation.description') }}
                </p>
            </WithAnimation>
            <WithAnimation :get-slot-ref="getTargetRef">
                <a
                    href="mailto:aser-14@bk.ru"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <ButtonComponent :btn-type="buttonTypesEnum.FILLED">
                        {{ $t('main.shortInformation.contactBtn') }}
                    </ButtonComponent>
                </a>
            </WithAnimation>
        </div>
        <DotsGrid />
    </section>
</template>

<style lang="scss" module>
@import './styles.scss';
</style>
