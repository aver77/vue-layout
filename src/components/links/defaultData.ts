import type { Component } from 'vue';

import CodeWars from '@/shared/assets/svg/components/CodeWars.vue';
import GitHub from '@/shared/assets/svg/components/GitHub.vue';
import LinkedIn from '@/shared/assets/svg/components/LinkedIn.vue';

interface ILink {
    link: string;
    linkComponent: Component;
}
export const getLinksWithComponents = (
    githubUrl: string,
    linkedinUrl: string,
    codewarsUrl: string
): ILink[] => [
    {
        link: githubUrl,
        linkComponent: GitHub
    },
    {
        link: linkedinUrl,
        linkComponent: LinkedIn
    },
    {
        link: codewarsUrl,
        linkComponent: CodeWars
    }
];
