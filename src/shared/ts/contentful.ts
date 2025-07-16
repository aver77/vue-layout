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

interface IContentfulMetadata {
    title: string;
    file: IFile;
}

export interface IInformation {
    name: string;
    position: string;
    about: string;
}
