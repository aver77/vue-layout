import { InjectionKey, Ref, provide, inject } from 'vue';
import type { ILinks } from '@/shared/ts/contentful';
import { fetchLinks } from '@/shared/api';
import useContentfulData from '@/shared/hooks/useContentfulData';

export interface IGlobalContentfulDataContext {
    links: Ref<ILinks | null>;
}

const GLOBAL_CONTENTFUL_DATA_KEY: InjectionKey<IGlobalContentfulDataContext> =
    Symbol('Contentful');

export const globalContentfulDataProvider = async () => {
    const links = useContentfulData<ILinks>(fetchLinks);

    provide(GLOBAL_CONTENTFUL_DATA_KEY, {
        links
    });
};

export const useGlobalContentfulData = () => {
    const ctx = inject(GLOBAL_CONTENTFUL_DATA_KEY);
    if (!ctx) {
        throw new Error(
            'useGlobalContentfulData must be used within globalContentfulDataProvider'
        );
    }

    return ctx;
};
