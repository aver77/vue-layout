import { createClient } from 'contentful';
import { IContentfulResource, IInformation } from '@/shared/ts/contentful';

export const getClient = () => {
    return createClient({
        space: import.meta.env.VITE_SPACE,
        accessToken: import.meta.env.VITE_ACCESS_TOKEN
    });
};

export const fetchInformation = async (locale: string) => {
    const client = await getClient();

    const about = (await client
        .getEntries({ content_type: 'portfolioInformation', locale })
        .catch(() => ({
            items: []
        }))) as IContentfulResource<IInformation>;

    return about?.items?.[0]?.fields || {};
};
