import { SidebarKeys } from '../enums/sidebarKeys';
import { getBoldText, getUnderlinedText } from './utils';

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
            title: 'Experience',
            vk: {
                title: 'ВК',
                startDate: 'Июль 2024',
                endDate: 'По настоящее время',
                position: 'Senior Frontend Developer',
                location: 'Удаленно',
                description:
                    ` - ${getBoldText('Ускорил скорость чистой сборки React части на 30%.')} Добавил кеширование, с ним ${getBoldText('скорость выше до 80%.')}\n` +
                    ` - ${getBoldText('Увеличил crash-free с 76% до 88.5%,')} внедрив механизм фильтрации рекламных и Adblock ошибок в нашу систему логирования.\n` +
                    ` - ${getBoldText('Исправил более 20% падающих автотестов и на 5% сократил общее время их прогона')}. Увеличил покрытие проекта тестовыми аттрибутами в ~3.5 раза.\n` +
                    ` - ${getBoldText('Улучшил метрику INP на 7%,')} оптимизировав первоначальную загрузку js-модулей.\n` +
                    ` - Разработал страницу ok.ru/pozdravleniya, множество компонентов в UI Kit.\n` +
                    ` - Стабилизировал проект: внедрил PMD-анализ java кода, подключил stylus линтер, перевел проект на строгий tsconfig, ${getBoldText('исправив более 4.500 typescript ошибок,')} написал eslint правило для проверки аттрибутов.\n`
            },
            it1: {
                title: 'Газпромбанк',
                startDate: 'Май 2023',
                endDate: 'Июль 2024',
                position: 'Senior Frontend Developer',
                location: 'Удаленно',
                description:
                    ` - Уменьшил ${getBoldText('время сборки')} всего проекта ${getBoldText('на ~50%.')}\n` +
                    ` - ${getBoldText('Уменьшил')} количество месячных ${getBoldText('crash-репортов в поддержку с 800 до 600')} (в среднем).\n` +
                    ` - ${getBoldText('Улучшил UI/UX')} метрику удовлетворенности пользователей ${getBoldText('на ~40%.')}\n` +
                    ` - ${getBoldText('Полностью конфигурировал процесс CI')}, что привело к ${getBoldText('12% уменьшению TTM.')}\n` +
                    ` - Разработал UI Kit для всего приложения с нуля.\n` +
                    ` - Создал детальную проектную документацию, ${getBoldText('скорил процесс онбординга в 2 раза.')}`
            },
            tecom: {
                title: 'Теком',
                startDate: 'Декабрь 2020',
                endDate: 'Май 2023',
                position: 'Frontend Developer',
                location: 'Удаленно',
                description:
                    ` - Увеличил покрытие проекта ${getBoldText('unit и e2e тестами с ~20% до ~80%.')}\n` +
                    ` - Мигрировал проект с классовых компонентов на React 17, ${getBoldText('добился 10% уменьшения TTM.')}\n` +
                    ` - ${getBoldText('Уменьшил время загрузки страниц в среднем на 15%,')} внедрив механизм фетчинга данных из react-query.\n` +
                    ` - C нуля разработал 3 ключевые библиотеки, которые покрывают до 80% отчетности компании: констркутор графиков, конструктор диаграмм, конструктор pdf-отчетов.`
            }
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
