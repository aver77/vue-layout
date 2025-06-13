import type { TranslateFunction } from '@/shared/ts/types';

interface IPosition {
    companyName: string;
    position: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    skills: string[];
}

const getPosition = (
    t: TranslateFunction,
    companyName: string,
    skills: string[]
) => {
    return {
        companyName: t(`main.experience.${companyName}.title`),
        position: t(`main.experience.${companyName}.position`),
        description: t(`main.experience.${companyName}.description`),
        startDate: t(`main.experience.${companyName}.startDate`),
        endDate: t(`main.experience.${companyName}.endDate`),
        location: t(`main.experience.${companyName}.location`),
        skills
    };
};

export const getPositions = (t: TranslateFunction): IPosition[] => [
    getPosition(t, 'vk', [
        'React.js',
        'TypeScript',
        'Stylus',
        'MobX',
        'Webpack',
        'Java',
        'Spring',
        'GWT'
    ]),
    getPosition(t, 'it1', [
        'React.js',
        'JavaScript',
        'CSS',
        'Styled Components',
        'Webpack',
        'HP Service Manager',
        'RAD'
    ]),
    getPosition(t, 'tecom', [
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
    ])
];
