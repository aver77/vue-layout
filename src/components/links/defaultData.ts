import GitHub from '@/shared/assets/svg/components/GitHub.vue';
import LinkedIn from '@/shared/assets/svg/components/LinkedIn.vue';
import CodeWars from '@/shared/assets/svg/components/CodeWars.vue';
import { Component } from 'vue';

interface ILink {
    link: string;
    linkComponent: Component;
}
export const links: ILink[] = [
    {
        link: 'https://github.com/aver77',
        linkComponent: GitHub
    },
    {
        link: 'https://www.linkedin.com/in/nikita-averochkin-761917276/',
        linkComponent: LinkedIn
    },
    {
        link: 'https://www.codewars.com/users/aver77',
        linkComponent: CodeWars
    }
];
