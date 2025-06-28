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
            nameGreet: "Hey, I'm Nikita",
            jobTitle: 'Frontend Developer',
            description:
                "I'm creative and constantly growing developer with more than three years of experience who loves crafting products that people love. I’m eager to apply my expertise, solving extraordinary problems and bringing profit to customers.",
            contactBtn: 'Contact me'
        },
        about: {
            title: 'About',
            information:
                'My expertise covers many different areas: I have developed high-load products and startup projects, led team, and also created custom web applications.\n' +
                'I am highly product-oriented and willing to do whatever it takes to ensure the success of the product. I immerse myself in projects quickly, delivering value to the business, offering tangible contributions and ideas, all while maintaining a customer-centric mindset.\n' +
                'I do not limit myself to certain technologies working with various libraries and frameworks, such as React.js, Next.js, Vue.js, etc.\n' +
                'I have excellent communication skills and am always open to new professional acquaintances!',
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
            webChat: {
                title: 'Web-chat with auto-translation',
                shortDesc:
                    'A real-time translation app, which is targeted on intercultural and interlingual communication.',
                longDesc:
                    'INApp is a real-time translation app for intercultural and interlingual communication.\n' +
                    'You can choose a translation language from those offered. And from now on, all the messages in the text chat will be translated to it. Moreover, you can make a video call to any user to see and hear your interlocutor, as well as read the subtitles of his speech in the language you chose.\n' +
                    'As for development - this is fullstack application with modular frontend architecture based on React.js + Typescript, which interacts with the server-side via HTTP and WS protocols. The client part also recognizes speech using the Google Speech-Recognition API.\n' +
                    'The backend was written on Node.js + Express.js with a high-level microservice architecture. There are 3 services: Gateway - responsible for JWT registration and forwarding requests to other services, Translation - responsible for translating all the texts using Yandex Translate API and Chats Service - based on WS protocol, it implements the exchange of messages and metadata with the client side.\n' +
                    'The application was fully deployed in Azure. Frontend - using VM + nginx. Backend - using Kubernetes + terraform cluster.'
            },
            aiChat: {
                title: 'Dummy AI Chat',
                shortDesc:
                    'This web-application imitates interface and gradual letter-by-letter answering of questions like in ChatGPT.',
                longDesc:
                    'An application that provides the user with a fancy interface and the ability to send various questions in message format and receive answers to them from the server.\n' +
                    'It was written on React.js + Typescript using modular frontend architecture and bundled via Vite.\n' +
                    'The main feature of this app is the use of a new feature added to the fetch API - stream processing. Data from the server arrives in chunks format. To process them, a stream is opened to read the data. Each chunk is decoded in a loop and gradually forms a response to the user, creating the effect of an AI chat-bot.'
            },
            compiler: {
                title: 'Web-compiler',
                shortDesc:
                    'An application that allows you to compile code in various programming languages and see the execution result.',
                longDesc:
                    'NW Compiler allows you to compile code in Python, C++ and JavaScript.\n' +
                    'This is fullstack application. The frontend part was built using React.js, using MUI library. Additionally, localization and theming have been added to improve the user experience.\n' +
                    "The backend was written on Node.js + Express.js using monolith structure. It's purpose is to compile code received by HTTP Post request. To make it out, a file with the extension corresponding to its language is created for it. And with the help of child process (exec module built into Node.js), compilation occurs on the machine from which the server is running. For this, pre-installed g++, node and python packages are used."
            },
            insuranceApp: {
                title: 'Online Insurance app',
                shortDesc:
                    'This application has implemented a convenient insurance process, fancy UI and a lot of client functionality.',
                longDesc:
                    'Policy app allows you to purchase insurance online for different types of property.\n' +
                    'This application was made to order and written on React.js + Typescript, using Ant Design as the UI library and modular frontend modular architecture for better future scalability.\n' +
                    'By agreement, only part of the functionality was implemented - the main adaptive page with localization and the business process of obtaining car insurance. The entire interface was made based on Figma layouts received from the designer.\n' +
                    'At this point, I have completed my role in development and the source code of the application has been handed over to the development team for further development.'
            },
            nextPortfolio: {
                title: 'Next.js portfolio app',
                shortDesc:
                    'This is the first version of my portfolio. In the process of implementing it, I was honing my skills in using Next.js.',
                longDesc:
                    'The first version of my portfolio application is designed as a web-based interactive CV for added convenience. It contains my personal information, projects, work experience and skills.\n' +
                    'As for development, it was written on 13v of Next.js using frontend modular architecture.\n' +
                    "This app contains information about my latest and greatest projects. Unfortunately, most of the projects are fall under NDA, so I can't share them. But, I have many other projects on GitHub that I haven't mentioned here. You can view their source code using the link above. These include many designed page layouts, simple web applications for practicing skills and web applications written in various frameworks. There are also console applications in various programming languages and a lot of other things.\n" +
                    "This portfolio app reflects my practical experience, but as far as UX is concerned, I think this is not it's strong point. That's why I decided to develop a second version with better UX and design."
            },
            vuePortfolio: {
                title: 'Vue.js portfolio app',
                shortDesc:
                    'This is the first version of my portfolio. In the process of implementing it, I was honing my skills in using the 3v of Vue.js.',
                longDesc:
                    'The second version of my portfolio application is designed as a web-based interactive CV for added convenience. It contains my personal information, projects, work experience and skills.\n' +
                    'As for development, it was written on 3v of Vue.js using frontend modular architecture.\n' +
                    "Given app contains information about my latest and greatest projects. Unfortunately, most of the projects are fall under NDA, so I can't share them. But, I have many other projects on GitHub that I haven't mentioned here. You can view their source code using the link above. Among them are many designed layout pages, simple web applications for practicing skills and web applications written in various frameworks. There are also console applications in various programming languages and a lot of other things.\n" +
                    'This portfolio app reflects my practical experience and, in my opinion, has a better design and interface than the first version.'
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
