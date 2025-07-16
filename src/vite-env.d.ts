interface ImportMetaEnv {
    readonly VITE_SPACE: string;
    readonly VITE_ACCESS_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
