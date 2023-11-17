import { SidebarKeys } from "../enums/sidebarKeys";

const en = {
    shared: {
        i: "I'm a"
    },
    components: {
        header: {
            resumeBtn: "My Resume"
        },
        sidebar: {
            [SidebarKeys.About]: "About",
            [SidebarKeys.Projects]: "Projects",
            [SidebarKeys.Experience]: "Experience",
            [SidebarKeys.Contact]: "Contacts"
        },
        footer: {
            copyright: "All rights reserved copyright © {year}"
        }
    },
    main: {
        shortInformation: {
            nameGreet: "Hey, I'm Nikita",
            jobTitle: "Frontend developer",
            description:
                "I'm creative and constantly growing Frontend developer with more than two years of experience working in various industry-leading projects and improving diverse React.js SPA and web-resources. Seeking to apply my expertise in large-scale or open-source projects, solving extraordinary problems and bringing profit to customers.",
            contactBtn: "Contact me"
        },
        about: {
            title: "About",
            information:
                "My expertise covers many different areas: I developed client parts of high-load product web applications, led the development of a small team, took part in creating the front end for startup projects, and also created custom web applications. The skills I have acquired allow me to quickly delve into any project and make tangible contributions and ideas.\n" +
                "I am well versed in design, responsive cross-browser layout, front-end architecture and working with external APIs. As a stack I prefer React.js / Next.js + Typescript. I have also worked with various ready-made solutions such as Wordpress, Service Manager, as well as low-code platforms.\n" +
                "I am continuously expanding my horizons in development and Computer Science, developing backend on microservice architecture, using Node.js, Express.js, MongoDB, Docker. And also, working with various front-end frameworks, such as Next.js, Vue.js, Svelte.js.\n" +
                "I have excellent communication skills and am always open to new professional acquaintances!",
            myLinks: "My Links",
            stackTitle: {
                work: "Use at work",
                frontend: "Personal frontend usage",
                backend: "Personal backend usage"
            }
        },
        projects: {
            title: "Projects",
            modal: {
                projectLinks: "Project links",
                sourceCode: "source code",
                liveProject: "live project"
            },
            webChat: {
                title: "Web-chat with auto-translation",
                shortDesc:
                    "A real-time translation app, which is targeted on intercultural and interlingual communication.",
                longDesc:
                    "INApp is a real-time translation app for intercultural and interlingual communication.\n" +
                    "You can choose a translation language from those offered. And from now on, all the messages in the text chat will be translated to it. Moreover, you can make a video call to any user to see and hear your interlocutor, as well as read the subtitles of his speech in the language you chose.\n" +
                    "As for development - this is fullstack application with modular frontend architecture based on React.js + Typescript, which interacts with the server-side via HTTP and WS protocols. The client part also recognizes speech using the Google Speech-Recognition API.\n" +
                    "The backend was written on Node.js + Express.js with a high-level microservice architecture. There are 3 services: Gateway - responsible for JWT registration and forwarding requests to other services, Translation - responsible for translating all the texts using Yandex Translate API and Chats Service - based on WS protocol, it implements the exchange of messages and metadata with the client side.\n" +
                    "The application was fully deployed in Azure. Frontend - using VM + nginx. Backend - using Kubernetes + terraform cluster."
            },
            aiChat: {
                title: "Dummy AI Chat",
                shortDesc:
                    "This web-application imitates interface and gradual letter-by-letter answering of questions like in ChatGPT.",
                longDesc:
                    "An application that provides the user with a fancy interface and the ability to send various questions in message format and receive answers to them from the server.\n" +
                    "It was written on React.js + Typescript using modular frontend architecture and bundled via Vite.\n" +
                    "The main feature of this app is the use of a new feature added to the fetch API - stream processing. Data from the server arrives in chunks format. To process them, a stream is opened to read the data. Each chunk is decoded in a loop and gradually forms a response to the user, creating the effect of an AI chat-bot."
            },
            compiler: {
                title: "Web-compiler",
                shortDesc:
                    "An application that allows you to compile code in various programming languages and see the execution result.",
                longDesc:
                    "NW Compiler allows you to compile code in Python, C++ and JavaScript.\n" +
                    "This is fullstack application. The frontend part was built using React.js, using MUI library. Additionally, localization and theming have been added to improve the user experience.\n" +
                    "The backend was written on Node.js + Express.js using monolith structure. It's purpose is to compile code received by HTTP Post request. To make it out, a file with the extension corresponding to its language is created for it. And with the help of child process (exec module built into Node.js), compilation occurs on the machine from which the server is running. For this, pre-installed g++, node and python packages are used."
            },
            insuranceApp: {
                title: "Online Insurance app",
                shortDesc:
                    "This application has implemented a convenient insurance process, fancy UI and a lot of client functionality.",
                longDesc:
                    "Policy app allows you to purchase insurance online for different types of property.\n" +
                    "This application was made to order and written on React.js + Typescript, using Ant Design as the UI library and modular frontend modular architecture for better future scalability.\n" +
                    "By agreement, only part of the functionality was implemented - the main adaptive page with localization and the business process of obtaining car insurance. The entire interface was made based on Figma layouts received from the designer.\n" +
                    "At this point, I have completed my role in development and the source code of the application has been handed over to the development team for further development."
            },
            nextPortfolio: {
                title: "Next.js portfolio app",
                shortDesc:
                    "This is the first version of my portfolio. In the process of implementing it, I was honing my skills in using Next.js.",
                longDesc:
                    "The first version of my portfolio application is designed as a web-based interactive CV for added convenience. It contains my personal information, projects, work experience and skills.\n" +
                    "As for development, it was written on 13v of Next.js using frontend modular architecture.\n" +
                    "This app contains information about my latest and greatest projects. Unfortunately, most of the projects are fall under NDA, so I can't share them. But, I have many other projects on GitHub that I haven't mentioned here. You can view their source code using the link above. These include many designed page layouts, simple web applications for practicing skills and web applications written in various frameworks. There are also console applications in various programming languages and a lot of other things.\n" +
                    "This portfolio app reflects my practical experience, but as far as UX is concerned, I think this is not it's strong point. That's why I decided to develop a second version with better UX and design."
            },
            vuePortfolio: {
                title: "Vue.js portfolio app",
                shortDesc:
                    "This is the first version of my portfolio. In the process of implementing it, I was honing my skills in using the 3v of Vue.js.",
                longDesc:
                    "The second version of my portfolio application is designed as a web-based interactive CV for added convenience. It contains my personal information, projects, work experience and skills.\n" +
                    "As for development, it was written on 3v of Vue.js using frontend modular architecture.\n" +
                    "Given app contains information about my latest and greatest projects. Unfortunately, most of the projects are fall under NDA, so I can't share them. But, I have many other projects on GitHub that I haven't mentioned here. You can view their source code using the link above. Among them are many designed layout pages, simple web applications for practicing skills and web applications written in various frameworks. There are also console applications in various programming languages and a lot of other things.\n" +
                    "This portfolio app reflects my practical experience and, in my opinion, has a better design and interface than the first version."
            },
            learnMore: "Learn more"
        },
        experience: {
            it1: {
                title: "IT1",
                startDate: "June 2023",
                endDate: "Present",
                position: "JS developer",
                location: "Moscow, Russia (Remote)",
                description:
                    "I was developing a corporate application portal based on HP Service Manager for Gazprombank. My responsibilities included improving system functionality, fixing defects, refactoring code, and creating new business logic in ES5 JavaScript.\n" +
                    "I have successfully used the SOAP API to create new queries and retrieve XML data, as well as optimize existing queries.\n" +
                    "My efforts resulted in a noticeable increase in team productivity. I have developed over 20 new applications that are actively used by thousands of users every day, and have made significant improvements to existing ones. In addition, I made important adjustments to the workflow and created detailed documentation to convey my experience to new team members."
            },
            calendaria: {
                title: "Calendaria",
                startDate: "November 2022",
                endDate: "May 2023",
                position: "Frontend developer",
                location: "Almaty, Kazakhstan (Remote)",
                description:
                    "I was a key participant in the full development cycle of the enterprise application portal, including:\n" +
                    "- Setting up frontend architecture on React.js and collaborating with the design team to determine the appearance of the interface.\n" +
                    "- Analysis of technical specifications and development business logic in accordance with the requirements and goals of the project.\n" +
                    "- Coordination of the work of a junior frontend developer.\n" +
                    "- Layout and styling of the application using the Ant Design library.\n" +
                    "- Interaction with the backend development team, receiving data via Rest API.\n" +
                    "The result of my work is the successful completion of development on time, ensuring compliance with customer requirements and achieving the goals set for the project. My efforts have resulted in an application that is actively used and maintained."
            },
            tecom: {
                title: "Tecom",
                startDate: "February 2022",
                endDate: "November 2022",
                position: "Frontend developer",
                location: "Nizhny Novgorod, Russia (Remote)",
                description:
                    "My work experience spans a variety of projects, including editor-like widgets and a core high-load application.\n" +
                    "My role included:\n" +
                    "- Fixing defects, refactoring code and writing new business logic in React.js.\n" +
                    "- Code coverage with unit and e2e tests to ensure application reliability.\n" +
                    "- Development of key libraries, including a corporate UI-kit with storybook, as well as a library of ready-made utilities.\n" +
                    "My contributions to editor-like widgets have greatly expanded their functionality and received positive feedback from users. Within the core application, I successfully improved its reliability and fixed major bugs, which significantly improved the quality of the user experience. My efforts in developing libraries have made development faster, more efficient, and more reliable."
            },
            julius: {
                title: "Julius",
                startDate: "October 2021",
                endDate: "February 2022",
                position: "Frontend developer",
                location: "London, United Kingdom (Remote)",
                description:
                    "My job was to prepare the company's main React.js project for release into production. For this I:\n" +
                    "- Redesigned the layout of many interface components, improving design and usability.\n" +
                    "- Developed many features and complex components, such as tables and dashboards, which expanded functionality.\n" +
                    "- Interacted with the frontend development project lead, exchanging ideas for the successful implementation of various functionalities.\n" +
                    "- Used GraphQL language to retrieve data from the server, working closely with the backend developer.\n" +
                    "Thus, my efforts led to the rapid development of the project, improving its functionality, interface and improving the quality of user experience. My work also highlights my ability to successfully collaborate within a development team and achieve collective goals."
            }
        },
        contact: {
            title: "Contacts",
            messageStart:
                "Shoot me an email if you want to connect! You can also find me on",
            messageDivider: "or",
            messageEnd: "if that's more your speed."
        }
    }
};
export default en;
