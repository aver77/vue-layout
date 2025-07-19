import { SidebarKeys } from '../enums/sidebarKeys';

const ru = {
    shared: {
        i: 'Я'
    },
    components: {
        header: {
            resumeBtn: 'Моё Резюме'
        },
        sidebar: {
            [SidebarKeys.About]: 'Обо мне',
            [SidebarKeys.Projects]: 'Проекты',
            [SidebarKeys.Experience]: 'Опыт',
            [SidebarKeys.Contact]: 'Контакты'
        },
        footer: {
            copyright: 'Все права защищены © {year}'
        }
    },
    main: {
        shortInformation: {
            contactBtn: 'Связаться'
        },
        about: {
            title: 'Обо мне',
            myLinks: 'Мои Ссылки',
            stackTitle: {
                work: 'Использую на работе',
                frontend: 'Использую в своих фронтенд проектах',
                backend: 'Использую в своих бэкенд проектах'
            }
        },
        projects: {
            title: 'Проекты',
            modal: {
                projectLinks: 'Ссылки на проект',
                sourceCode: 'исходный код',
                liveProject: 'проект онлайн'
            },
            learnMore: 'Узнать больше'
        },
        experience: {
            title: 'Experience'
        },
        contact: {
            title: 'Контакты',
            messageStart:
                'Напишите мне по электронной почте, если хотите связаться! Вы также можете найти меня на',
            messageDivider: 'или в',
            messageEnd: 'если вам так быстрее.'
        }
    }
};
export default ru;
