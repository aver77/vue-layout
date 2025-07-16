import { createClient } from 'contentful';
import type {
    IAbout,
    IContentfulResource,
    IInformation
} from '@/shared/ts/contentful';

const client = createClient({
    space: import.meta.env.VITE_SPACE,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN
});

export const fetchInformation = async (locale: string) => {
    const about = (await client
        .getEntries({ content_type: 'portfolioInformation', locale })
        .catch(() => ({
            items: []
        }))) as IContentfulResource<IInformation>;

    return about?.items?.[0]?.fields || {};
};

export const fetchAbout = async (locale: string) => {
    const about = (await client
        .getEntries({ content_type: 'portfolioAbout', locale })
        .catch(() => ({
            items: []
        }))) as IContentfulResource<IAbout>;

    return about?.items?.[0]?.fields || {};
};
