import imgWebChat from '@/shared/assets/images/webchat.png';
import imgAiChat from '@/shared/assets/images/chatbot.png';
import imgWebCompiler from '@/shared/assets/images/compiler.png';
import imgInsuranceApp from '@/shared/assets/images/policy.png';
import imgNextPortfolio from '@/shared/assets/images/portfolioNext.png';
import imgVuePortfolio from '@/shared/assets/images/vuePortfolio.png';
import { TranslateResult } from 'vue-i18n';

export type TLink = `https://${string}` | `http://${string}`;
interface IProject {
    image: string;
    name: string;
    stack: string[];
    githubLink: TLink;
    projectLink?: TLink;
    shortDesc: string;
    longDesc: string;
}
export const getProjects = (
    t: (key: string, named?: Record<string, any>) => TranslateResult
): IProject[] => [
    {
        image: imgWebChat,
        name: t('main.projects.webChat.title'),
        stack: [
            'React.js',
            'Typescript',
            'Zustand',
            'Tailwind',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Docker',
            'Nginx',
            'Terraform',
            'Kubernetes'
        ],
        githubLink: 'https://github.com/orgs/INApp-team/repositories',
        shortDesc: t('main.projects.webChat.shortDesc'),
        longDesc: t('main.projects.webChat.longDesc')
    },
    {
        image: imgAiChat,
        name: t('main.projects.aiChat.title'),
        stack: ['React.js', 'Typescript', 'SCSS', 'Fetch ReadableStream'],
        githubLink: 'https://github.com/aver77/hashbon-task',
        shortDesc: t('main.projects.aiChat.shortDesc'),
        longDesc: t('main.projects.aiChat.longDesc')
    },
    {
        image: imgWebCompiler,
        name: t('main.projects.compiler.title'),
        stack: [
            'React.js',
            'JavaScript',
            'Material UI',
            'CSS in JS',
            'i18n',
            'Node.js',
            'Express.js'
        ],
        githubLink: 'https://github.com/aver77/p-24-dubai',
        shortDesc: t('main.projects.compiler.shortDesc'),
        longDesc: t('main.projects.compiler.longDesc')
    },
    {
        image: imgInsuranceApp,
        name: t('main.projects.insuranceApp.title'),
        stack: [
            'React.js',
            'Typescript',
            'Zustand',
            'Ant Design',
            'SCSS Modules',
            'i18n'
        ],
        githubLink: 'https://github.com/aver77/p-24-dubai',
        shortDesc: t('main.projects.insuranceApp.shortDesc'),
        longDesc: t('main.projects.insuranceApp.longDesc')
    },
    {
        image: imgNextPortfolio,
        name: t('main.projects.nextPortfolio.title'),
        stack: [
            'Next.js',
            'Typescript',
            'SCSS Modules',
            'i18n',
            'Framer-motion',
            'React-flow'
        ],
        githubLink: 'https://github.com/aver77/next-portfolio',
        projectLink: 'https://nw-next-portfolio.vercel.app',
        shortDesc: t('main.projects.nextPortfolio.shortDesc'),
        longDesc: t('main.projects.nextPortfolio.longDesc')
    },
    {
        image: imgVuePortfolio,
        name: t('main.projects.vuePortfolio.title'),
        stack: [
            'Vue.js',
            'Typescript',
            'SCSS Modules',
            'Intlify',
            'Oku-UI',
            'Vite'
        ],
        githubLink: 'https://github.com/aver77/vue-layout',
        projectLink: 'https://nw-vue-portfolio.vercel.app',
        shortDesc: t('main.projects.vuePortfolio.shortDesc'),
        longDesc: t('main.projects.vuePortfolio.longDesc')
    }
];
