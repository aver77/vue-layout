import imgWebChat from "@/shared/assets/images/webchat.png";
import imgAiChat from "@/shared/assets/images/chatbot.png";
import imgWebCompiler from "@/shared/assets/images/compiler.png";
import imgInsuranceApp from "@/shared/assets/images/policy.png";
import imgNextPortfolio from "@/shared/assets/images/portfolioNext.png";
import imgVuePortfolio from "@/shared/assets/images/vuePortfolio.png";

export type TLink = `https://${string}` | `http://${string}`;
interface IProjects {
    image: string;
    name: string;
    stack: string[];
    githubLink: TLink;
    projectLink?: TLink;
    shortDesc: string;
    longDesc: string;
}
export const projects: IProjects[] = [
    {
        image: imgWebChat,
        name: "Web-chat with auto-translation",
        stack: [
            "React.js",
            "Typescript",
            "Zustand",
            "Tailwind",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Docker",
            "Nginx",
            "Terraform",
            "Kubernetes"
        ],
        githubLink: "https://github.com/orgs/INApp-team/repositories",
        shortDesc:
            "A real-time translation app, which is targeted on intercultural and interlingual communication.",
        longDesc:
            "INApp is a real-time translation app for for intercultural and interlingual communication.\n" +
            "You can choose a translation language from those offered. And from that time, all the messages in the text chat will be translated to it. Moreover, you can make a video call to any user and after that you will be able to hear and see your interlocutor and also read the subtitles of his speech on language you chose.\n" +
            "As for development - this is fullstack application with modular frontend on React.js + Typescript, which interacts with the server-side via HTTP and WS protocols, and also recognizes speech using the Google Speech-recognition API.\n" +
            "Backend was written on Node.js + Express with high-level microservices architecture. There are 3 services: gateway - responsible for JWT registration and forwarding requests to other services, translation - responsible for translate all the texts using Yandex translate API, and chats service - based on Websocket protocol, it's implement message and metadata exchange with client-side.\n" +
            "The application was fully deployed in Azure. Frontend - using VM + nginx. Backend - using Kubernetes + terraform cluster."
    },
    {
        image: imgAiChat,
        name: "Dummy AI Chat",
        stack: ["React.js", "Typescript", "SCSS", "Fetch ReadableStream"],
        githubLink: "https://github.com/aver77/hashbon-task",
        shortDesc:
            "This web-application imitates interface and responses on questions like in ChatGPT.",
        longDesc:
            "An application that provides the user with a fancy interface and the ability to send various questions in message format and receive answers to them from the server.\n" +
            "It was written on React.js + Typescript using frontend modular architecture and bundled via Vite.\n" +
            "The main feature of this app is the use of a new feature added to the fetch API - stream processing. Data from the server arrives in chunks format. To process them, a stream is opened to read the data. Each chunk is decoded in a loop and gradually forms a response to the user, creating the effect of an AI chat-bot."
    },
    {
        image: imgWebCompiler,
        name: "Web-compiler",
        stack: [
            "React.js",
            "JavaScript",
            "Material UI",
            "CSS in JS",
            "i18n",
            "Node.js",
            "Express.js"
        ],
        githubLink: "https://github.com/aver77/p-24-dubai",
        shortDesc:
            "An application that allows you to compile code in various programming languages and see the execution result.",
        longDesc:
            "NW Compiler allows you to compile code in Python, C++ and JavaScript.\n" +
            "Frontend was built using React.js, using MUI library. Additionally, localization and theming have been added to improve user experience.\n" +
            "Backend was written on Node.js + Express using monolith structure whose purpose is to compile the received code using an HTTP Post request. To make it out, a file with the extension corresponding to its language is created for it. And with the help of child process (exec module built into Node.js), compilation occurs on the machine from which the server is running. For this, pre-installed g++, node and python packages are used."
    },
    {
        image: imgInsuranceApp,
        name: "Insurance app",
        stack: [
            "React.js",
            "Typescript",
            "Zustand",
            "Ant Design",
            "SCSS Modules",
            "i18n"
        ],
        githubLink: "https://github.com/aver77/p-24-dubai",
        shortDesc:
            "This application has implemented a convenient insurance process, fancy UI and a lot of client functionality.",
        longDesc:
            "Policy allows you to purchase insurance online for different types of property.\n" +
            "This application was made to order and written on React.js + Typescript, using Ant Design as a UI library and modular frontend modular architecture for better scalability in advance.\n" +
            "By agreement, only part of the functionality was implemented - the main adaptive page with localization and the business process of obtaining car insurance.All the interface was made based on figma layouts received from the designer.\n" +
            "At this point the source code of the application has been transferred to the development team for further development."
    },
    {
        image: imgNextPortfolio,
        name: "Next.js portfolio app",
        stack: [
            "Next.js",
            "Typescript",
            "SCSS Modules",
            "i18n",
            "Framer-motion",
            "React-flow"
        ],
        githubLink: "https://github.com/aver77/next-portfolio",
        projectLink: "https://next-portfolio-b89g.vercel.app",
        shortDesc:
            "This is the first version of my portfolio applications. It was also a little Next.js training.",
        longDesc:
            "The portfolio application is designed as a CV in web format for additional convenience. It contains information my personal information, work experience and skills.\n" +
            "As for development, it was written on 13v of Next.js using frontend modular architecture.\n" +
            "I decided to add information about my latest and greatest projects to this app. Unfortunately, most of the projects are fall under NDA, so I can't share them here. But many other projects that I didn't mention here are stored in my GitHub at the link below.Among them are many designed layout pages, simple web applications for practicing skills and web applications written in various frameworks. There are also some console applications in various programming languages."
    },
    {
        image: imgVuePortfolio,
        name: "Vue.js portfolio app",
        stack: ["Vue.js", "Typescript", "SCSS Modules", "Vite", "..."],
        githubLink: "https://github.com/aver77/vue-layout",
        projectLink: "http://localhost:5173",
        shortDesc:
            "The second version of my portfolio with better UX and layout. It was also a little Vue.js training.",
        longDesc: "..."
    }
];
