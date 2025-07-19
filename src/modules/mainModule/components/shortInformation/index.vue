<script setup lang="ts">
import { ref } from 'vue';

import WithAnimation from '@/components/HOCs/withAnimation/index.vue';
import { fetchInformation } from '@/shared/api';
import { shortInformationId } from '@/shared/constants/elementsIds';
import useContentfulData from '@/shared/hooks/useContentfulData';
import { useGlobalContentfulData } from '@/shared/providers/globalContentfulDataProvider';
import type { IInformation } from '@/shared/ts/contentful';
import buttonTypesEnum from '@/shared/ui/components/button/buttonTypesEnum';
import ButtonComponent from '@/shared/ui/components/button/index.vue';
import TitleComponent from '@/shared/ui/components/title/index.vue';
import { titleTypesEnum } from '@/shared/ui/components/title/titleEnum';
import DotsGrid from './dotsGrid/index.vue';

const target = ref<HTMLElement | null>(null);
const getTargetRef = () => target;

const information = useContentfulData<IInformation>(fetchInformation);
const { links } = useGlobalContentfulData();
</script>

<template>
    <section :id="shortInformationId" ref="target" :class="$style.container">
        <div :class="$style.infoWrapper">
            <WithAnimation :get-slot-ref="getTargetRef">
                <TitleComponent :title-type="titleTypesEnum.h1">{{
                    information?.name
                }}</TitleComponent>
            </WithAnimation>
            <WithAnimation :get-slot-ref="getTargetRef">
                <TitleComponent
                    :title-type="titleTypesEnum.h3"
                    :with-dot="false"
                >
                    {{ $t('shared.i') }}
                    <span :class="$style.titleJob">
                        {{ information?.position }}
                    </span>
                </TitleComponent>
            </WithAnimation>
            <WithAnimation :get-slot-ref="getTargetRef">
                <p :class="$style.description">
                    {{ information?.about }}
                </p>
            </WithAnimation>
            <WithAnimation :get-slot-ref="getTargetRef">
                <a
                    :href="`mailto:${links?.email}`"
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
