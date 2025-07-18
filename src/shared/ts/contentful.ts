export interface IContentfulResourceFields<T> {
    fields: T;
    sys: {
        id: string;
        createdAt: string;
        updatedAt: string;
    };
}

export interface IContentfulResource<T> {
    items: IContentfulResourceFields<T>[];
}

interface IFile {
    url: string;
    fileName: string;
    details: {
        size: number;
        image: { width: number; height: number };
    };
}

export interface IContentfulMetadata {
    title: string;
    file: IFile;
}

export interface IInformation {
    name: string;
    position: string;
    about: string;
}

export interface IAbout {
    information: string;
    workUsage: string[];
    personalUsage: string[];
    personalBackendUsage: string[];
}

export interface ILinks {
    githubUrl: string;
    linkedinUrl: string;
    codewarsUrl: string;
    resumePdf: IContentfulResourceFields<IContentfulMetadata>;
    email: string;
    telegramUrl: string;
}

export interface IProject {
    name: string;
    image: IContentfulResourceFields<IContentfulMetadata>;
    stack: string[];
    githubLink: string;
    projectLink?: string;
    shortDesc: string;
    longDesc: string;
}

export interface IExperience {
    companyName: string;
    companyLink?: string;
    position: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    skills: string[];
}
