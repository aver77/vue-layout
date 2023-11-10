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
        image: "",
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
        longDesc: "..."
    },
    {
        image: "",
        name: "Dummy AI Chat",
        stack: ["React.js", "Typescript", "SCSS", "Fetch ReadableStream"],
        githubLink: "https://github.com/aver77/hashbon-task",
        shortDesc:
            "This web-application imitates interface and responses on questions like in ChatGPT.",
        longDesc: "..."
    },
    {
        image: "",
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
        longDesc: "..."
    },
    {
        image: "",
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
        longDesc: "..."
    },
    {
        image: "",
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
        longDesc: "..."
    },
    {
        image: "",
        name: "Vue.js portfolio app",
        stack: ["Vue.js", "Typescript", "SCSS Modules", "Vite", "..."],
        githubLink: "https://github.com/aver77/vue-layout",
        projectLink: "https://next-portfolio-b89g.vercel.app",
        shortDesc:
            "The second version of my portfolio with better UX and layout. It was also a little Vue.js training.",
        longDesc: "..."
    }
];
