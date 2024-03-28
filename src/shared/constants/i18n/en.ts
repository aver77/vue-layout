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
            it1: {
                title: 'IT1',
                startDate: 'May 2023',
                endDate: 'Present',
                position: 'Frontend Developer',
                location: 'Moscow, Russia (Remote)',
                description:
                    'I was developing a corporate application portals:\n' +
                    ` - Worked on diverse projects: on React.js and on HP Service Manager using ES5 JavaScript.\n` +
                    ` - Carried out organizational tasks of the team.\n` +
                    `${getBoldText(
                        'I have completed over 30% of all tasks'
                    )} assigned to the team on applications that are used by thousands of users and implemented crucial functionality to beta React.js project. Moreover, I essentially ${getBoldText(
                        'enhanced the workflow and team productivity'
                    )} by conducting daily briefings, retrospectives and creating detailed project documentation.`
            },
            calendaria: {
                title: 'Calendaria',
                startDate: 'November 2022',
                endDate: 'May 2023',
                position: 'Frontend Developer',
                location: 'Almaty, Kazakhstan (Remote)',
                description:
                    'I was a frontend lead of enterprise portal, including:\n' +
                    ` - Designing frontend architecture on React.js and application layout from scratch.\n` +
                    ` - Analysing of technical assignment and project needs.\n` +
                    ` - Coordinating of the work of a junior frontend developer, interacting with various teams.\n` +
                    `I successfully ${getBoldText(
                        'accomplished full development process'
                    )} on time, ${getBoldText(
                        'completely satisfied the customer’s requirements'
                    )} achieving all project goals. My efforts have resulted in an application that is actively maintained and used by hundreds of users.`
            },
            tecom: {
                title: 'Tecom',
                startDate: 'November 2021',
                endDate: 'November 2022',
                position: 'Frontend Developer',
                location: 'Nizhny Novgorod, Russia (Remote)',
                description:
                    'I was working on several projects: My role included:\n' +
                    ` - Fixing, refactoring and writing new logic on React.js.\n` +
                    ` - Implement unit and e2e tests to ensure the core application reliability.\n` +
                    ` - Development of key libraries, including a corporate UI-kit with storybook, as well as a library of ready-made utilities.\n` +
                    `${getBoldText(
                        'I realized ~90% of the required functionality'
                    )} in editor-like widgets and received positive feedback from customers. ${getBoldText(
                        'I made the core application several times more reliable'
                    )} due to my tests, which helped the team fix the main problems. My efforts in developing libraries ${getBoldText(
                        'have made development faster'
                    )} and more efficient.`
            },
            julius: {
                title: 'Julius',
                startDate: 'December 2020',
                endDate: 'November 2021',
                position: 'Frontend Developer',
                location: 'London, United Kingdom (Remote)',
                description:
                    "I was preparing the company's main React.js project for release into production. For this I:\n" +
                    ` - Redesigned the layout of almost all the components, improved app accessibility.\n` +
                    ` - Developed many features, such as theming and internalization and components, such as tables and dashboards.\n` +
                    `${getBoldText(
                        'I significantly accelerated the frontend development'
                    )} due to my SCSS modifications, ${getBoldText(
                        'improved a lot of core functionality'
                    )}, quality of user experience making the app pixel-perfect identical to Figma and ${getBoldText(
                        ' app accessibility up to 90%'
                    )}. Besides, I successfully ${getBoldText(
                        'collaborated with team members and motivated them'
                    )} to achieve collective goals.`
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
