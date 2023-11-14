interface IPosition {
    companyName: string;
    position: string;
    description: string;
    startDate: string;
    endDate?: string;
    location: string;
    skills: string[];
}

export const positions: IPosition[] = [
    {
        companyName: "IT1",
        position: "JS developer",
        description:
            "I was developing a corporate application portal based on HP Service Manager for Gazprombank. My responsibilities included improving system functionality, fixing defects, refactoring code, and creating new business logic in ES5 JavaScript.\n" +
            "I have successfully used the SOAP API to create new queries and retrieve XML data, as well as optimize existing queries.\n" +
            "My efforts resulted in a noticeable increase in team productivity. I have developed over 20 new applications that are actively used by thousands of users every day, and have made significant improvements to existing ones. In addition, I made important adjustments to the workflow and created detailed documentation to convey my experience to new team members.",
        startDate: "June 2023",
        location: "Moscow, Russia (Remote)",
        skills: [
            "HP Service Manager",
            "JavaScript",
            "RAD",
            "SOAP API",
            "SQL",
            "JSON"
        ]
    },
    {
        companyName: "Calendaria",
        position: "Frontend developer",
        description:
            "I was a key participant in the full development cycle of the enterprise application portal, including:\n" +
            "- Setting up frontend architecture on React.js and collaborating with the design team to determine the appearance of the interface.\n" +
            "- Analysis of technical specifications and development business logic in accordance with the requirements and goals of the project.\n" +
            "- Coordination of the work of a junior frontend developer.\n" +
            "- Layout and styling of the application using the Ant Design library.\n" +
            "- Interaction with the backend development team, receiving data via Rest API.\n" +
            "The result of my work is the successful completion of development on time, ensuring compliance with customer requirements and achieving the goals set for the project. My efforts have resulted in an application that is actively used and maintained.",
        startDate: "November 2022",
        endDate: "May 2023",
        location: "Almaty, Kazakhstan (Remote)",
        skills: [
            "React.js",
            "Typescript",
            "Jss",
            "Ant Design",
            "Redux-toolkit",
            "Webpack"
        ]
    },
    {
        companyName: "Tecom",
        position: "Frontend developer",
        description:
            "My work experience spans a variety of projects, including editor-like widgets and a core high-load application.\n" +
            "My role included:\n" +
            "- Fixing defects, refactoring code and writing new business logic in React.js.\n" +
            "- Code coverage with unit and e2e tests to ensure application reliability.\n" +
            "- Development of key libraries, including a corporate UI-kit with storybook, as well as a library of ready-made utilities.\n" +
            "My contributions to editor-like widgets have greatly expanded their functionality and received positive feedback from users. Within the core application, I successfully improved its reliability and fixed major bugs, which significantly improved the quality of the user experience. My efforts in developing libraries have made development faster, more efficient, and more reliable.",
        startDate: "February 2022",
        endDate: "November 2022",
        location: "Moscow, Russia (Remote)",
        skills: [
            "React.js",
            "JavaScript",
            "Jss",
            "material-UI",
            "i18n",
            "Redux",
            "Reselect",
            "Jest",
            "Playwright",
            "lerna"
        ]
    },
    {
        companyName: "Julius",
        position: "Frontend developer",
        description:
            "My job was to prepare the company's main React.js project for release into production. For this I:\n" +
            "- Redesigned the layout of many interface components, improving design and usability.\n" +
            "- Developed many features and complex components, such as tables and dashboards, which expanded functionality.\n" +
            "- Interacted with the frontend development project lead, exchanging ideas for the successful implementation of various functionalities.\n" +
            "- Used GraphQL language to retrieve data from the server, working closely with the backend developer.\n" +
            "Thus, my efforts led to the rapid development of the project, improving its functionality, interface and improving the quality of user experience. My work also highlights my ability to successfully collaborate within a development team and achieve collective goals.",
        startDate: "October 2021",
        endDate: "February 2022",
        location: "London, United Kingdom (Remote)",
        skills: [
            "React.js",
            "Typescript",
            "Scss",
            "Ant Design",
            "React Relay",
            "GraphQL"
        ]
    }
];
