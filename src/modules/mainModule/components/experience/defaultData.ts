import { TranslateResult } from 'vue-i18n';

interface IPosition {
    companyName: string;
    position: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    skills: string[];
}

export const getPositions = (
    t: (key: any, named?: Record<string, any>) => TranslateResult
): IPosition[] => [
    {
        companyName: t('main.experience.it1.title'),
        position: t('main.experience.it1.position'),
        description: t('main.experience.it1.description'),
        startDate: t('main.experience.it1.startDate'),
        endDate: t('main.experience.it1.endDate'),
        location: t('main.experience.it1.location'),
        skills: [
            'HP Service Manager',
            'JavaScript',
            'RAD',
            'SOAP API',
            'React.js',
            'CSS'
        ]
    },
    {
        companyName: t('main.experience.calendaria.title'),
        position: t('main.experience.calendaria.position'),
        description: t('main.experience.calendaria.description'),
        startDate: t('main.experience.calendaria.startDate'),
        endDate: t('main.experience.calendaria.endDate'),
        location: t('main.experience.calendaria.location'),
        skills: [
            'React.js',
            'Typescript',
            'Jss',
            'Ant Design',
            'Redux-toolkit',
            'Webpack'
        ]
    },
    {
        companyName: t('main.experience.tecom.title'),
        position: t('main.experience.tecom.position'),
        description: t('main.experience.tecom.description'),
        startDate: t('main.experience.tecom.startDate'),
        endDate: t('main.experience.tecom.endDate'),
        location: t('main.experience.tecom.location'),
        skills: [
            'React.js',
            'JavaScript',
            'Jss',
            'material-UI',
            'i18n',
            'Redux',
            'Reselect',
            'Jest',
            'Playwright',
            'lerna'
        ]
    },
    {
        companyName: t('main.experience.julius.title'),
        position: t('main.experience.julius.position'),
        description: t('main.experience.julius.description'),
        startDate: t('main.experience.julius.startDate'),
        endDate: t('main.experience.julius.endDate'),
        location: t('main.experience.julius.location'),
        skills: [
            'React.js',
            'Typescript',
            'Scss',
            'Ant Design',
            'React Relay',
            'GraphQL'
        ]
    }
];
