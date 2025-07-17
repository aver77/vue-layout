import { SidebarKeys } from '../enums/sidebarKeys';
import { getBoldText, getUnderlinedText } from './utils';

const en = {
    shared: {
        i: "I'm a"
    },
    components: {
        header: {
            resumeBtn: 'My Resume'
        },
        sidebar: {
            [SidebarKeys.About]: 'About',
            [SidebarKeys.Projects]: 'Projects',
            [SidebarKeys.Experience]: 'Experience',
            [SidebarKeys.Contact]: 'Contacts'
        },
        footer: {
            copyright: 'All rights reserved copyright © {year}'
        }
    },
    main: {
        shortInformation: {
            contactBtn: 'Contact me'
        },
        about: {
            title: 'About',
            myLinks: 'My Links',
            stackTitle: {
                work: 'Use at work',
                frontend: 'Personal frontend usage',
                backend: 'Personal backend usage'
            }
        },
        projects: {
            title: 'Projects',
            modal: {
                projectLinks: 'Project links',
                sourceCode: 'source code',
                liveProject: 'live project'
            },
            learnMore: 'Learn more'
        },
        experience: {
            title: 'Experience',
            vk: {
                title: 'VK',
                startDate: 'July 2024',
                endDate: 'Present',
                position: 'Senior Frontend Developer',
                location: 'Remote',
                description:
                    ` - ${getBoldText('Accelerated the build time of React part by 30%.')} Added caching, with it the ${getBoldText('speed is higher up to 80%.')}\n` +
                    ` - ${getBoldText('Increased crash-free from 76% to 88.5%')} by implementing filtering of advertising and Adblock errors into our logging system.\n` +
                    ` - ${getBoldText('Fixed more than 20% of failing autotests and reduced them overall running time by 5%')}, increased the number of test attributes by ~3.5 times.\n` +
                    ` - ${getBoldText('Increased the INP metric by 7%')}, optimized the initial loading of js modules.\n` +
                    ` - Developed the page ok.ru/pozdravleniya, many components in UI Kit.\n` +
                    ` - Stabilized the project: implemented PMD analysis of Java code, added stylus linter, transferred the project to strict tsconfig, ${getBoldText('fixed more than 4,500 typescript errors')}, wrote an eslint rule for checking attributes.\n`
            },
            it1: {
                title: 'Gazprombank',
                startDate: 'May 2023',
                endDate: 'July 2024',
                position: 'Senior Frontend Developer',
                location: 'Remote',
                description:
                    ` - Reduced the ${getBoldText('build time')} of the entire project ${getBoldText('by ~50%.')}\n` +
                    ` - ${getBoldText('Reduced')} the number of monthly support ${getBoldText('crash requests from 800 to 600')} (by average).\n` +
                    ` - ${getBoldText('Improved the UI/UX')} user satisfaction metric ${getBoldText('by ~40%.')}\n` +
                    ` - ${getBoldText('Configured the CI process')}, which led to a ${getBoldText('12% reduction in TTM.')}\n` +
                    ` - Developed a UI Kit for the entire application from scratch.\n` +
                    ` - Created detailed design documentation, ${getBoldText('sped up the onboarding process by 2 times.')}`
            },
            tecom: {
                title: 'Tecom',
                startDate: 'December 2020',
                endDate: 'May 2023',
                position: 'Frontend Developer',
                location: 'Remote',
                description:
                    ` - Increased the project's ${getBoldText('unit and e2e test coverage from ~20% to ~80%.')}\n` +
                    ` - Migrated the project from class components to React 17, ${getBoldText('achieved a TTM reduction of up to 10%.')}\n` +
                    ` - ${getBoldText('Reduced pages loading time by an average of 15%')} by implementing the react-query data-fetching mechanism.\n` +
                    ` - Developed 3 key libraries from scratch that covers up to 80% of the company's report flow: chart, graph builder, pdf-builder.`
            }
        },
        contact: {
            title: 'Contacts',
            messageStart:
                'Shoot me an email if you want to connect! You can also find me on',
            messageDivider: 'or',
            messageEnd: "if that's more your speed."
        }
    }
};
export default en;
