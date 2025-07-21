import type { IContentfulResourceFields } from '@/shared/ts/contentful';

export const sortContentfulArrays = <T extends { id: number }>(
    array: IContentfulResourceFields<T>[]
) => {
    return array?.sort((item1, item2) => item1.fields.id - item2.fields.id);
};
