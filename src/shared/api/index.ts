import { createClient } from 'contentful';
import type {
    IAbout,
    IContentfulResource,
    IContentfulResourceFields,
    IInformation,
    ILinks
} from '@/shared/ts/contentful';

const client = createClient({
    space: import.meta.env.VITE_SPACE,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN
});

async function fetchBase<T>(
    locale: string,
    contentType: string,
    isSingleRecord: true
): Promise<T>;

async function fetchBase<T>(
    locale: string,
    contentType: string,
    isSingleRecord: false
): Promise<IContentfulResourceFields<T>[]>;
async function fetchBase<T>(
    locale: string,
    contentType: string,
    isSingleRecord: boolean
) {
    const data = (await client
        .getEntries({ content_type: contentType, locale })
        .catch(() => ({
            items: []
        }))) as IContentfulResource<T>;

    if (isSingleRecord) {
        return data?.items?.[0]?.fields || {};
    }

    return data?.items || [];
}

export const fetchInformation = async (locale: string) => {
    return await fetchBase<IInformation>(locale, 'portfolioInformation', true);
};

export const fetchAbout = async (locale: string) => {
    return await fetchBase<IAbout>(locale, 'portfolioAbout', true);
};

export const fetchLinks = async (locale: string) => {
    return await fetchBase<ILinks>(locale, 'portfolioLinks', true);
};
