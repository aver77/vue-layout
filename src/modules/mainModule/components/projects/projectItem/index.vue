<script setup lang="ts">
import { PropType, ref, defineAsyncComponent, Ref } from 'vue';
import { TLink } from '../defaultData';

import WithAnimation from '@/components/HOCs/withAnimation/index.vue';
import WithModal from '@/components/HOCs/withModal/index.vue';

const Modal = defineAsyncComponent(() => import('./modal/index.vue'));

import TitleComponent from '@/shared/ui/components/title/index.vue';
import { titleTypesEnum } from '@/shared/ui/components/title/titleEnum';

import Line from '@/shared/ui/components/line/index.vue';
import GitHub from '@/shared/assets/svg/components/GitHub.vue';
import GoTo from '@/shared/assets/svg/components/GoTo.vue';

const { stack } = defineProps({
    image: {
        type: String
    },
    name: {
        type: String
    },
    stack: {
        type: Array as PropType<string[]>
    },
    githubLink: {
        type: String as PropType<TLink>
    },
    projectLink: {
        type: String as PropType<TLink>,
        default: () => undefined
    },
    shortDesc: {
        type: String
    },
    longDesc: {
        type: String
    },
    getParentRef: {
        type: Function as PropType<() => Ref<HTMLElement | null>>,
        default: () => {
            return () => null;
        }
    }
});

const stackStr = stack?.join(' - ');

const modalOpened = ref(false);

const onOpenModal = () => (modalOpened.value = true);
const onCloseModal = () => (modalOpened.value = false);
</script>

<template>
    <div :class="$style.container">
        <WithAnimation
            :get-slot-ref="getParentRef"
            :wrapper-class="$style.imgContainer"
            @click="onOpenModal"
        >
            <img :src="image" :class="$style.img" alt="project image" loading="lazy" />
        </WithAnimation>
        <div :class="$style.textsContainer">
            <WithAnimation :get-slot-ref="getParentRef">
                <TitleComponent
                    :with-dot="false"
                    :title-type="titleTypesEnum.h4"
                    :class="$style.title"
                    >{{ name }}</TitleComponent
                >
            </WithAnimation>
            <div :class="$style.linksContainer">
                <Line />
                <a :href="githubLink" target="_blank" rel="noreferrer noopener">
                    <GitHub :class="$style.linkSvg" />
                </a>
                <a
                    v-if="projectLink"
                    :href="projectLink"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <GoTo :class="$style.linkSvg" />
                </a>
            </div>
            <WithAnimation :get-slot-ref="getParentRef">
                <p :class="$style.stackStr">{{ stackStr }}</p>
            </WithAnimation>
            <WithAnimation
                :get-slot-ref="getParentRef"
                :slot-class="$style.shortDescContainer"
            >
                <span :class="$style.shortDesc">{{ shortDesc }}</span>
                <span :class="$style.learnMore" @click="onOpenModal">
                    {{ $t('main.projects.learnMore') }} ➤
                </span>
            </WithAnimation>
        </div>
        <WithModal :modal-opened="modalOpened" :close-modal="onCloseModal">
            <Modal
                :name="name"
                :stack-str="stackStr"
                :github-link="githubLink"
                :project-link="projectLink"
                :long-desc="longDesc"
                :image="image"
            />
        </WithModal>
    </div>
</template>

<style lang="scss" module>
@import './styles.scss';
</style>
