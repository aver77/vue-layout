import { SidebarKeys } from '../enums/sidebarKeys';

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
            title: 'Experience'
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
