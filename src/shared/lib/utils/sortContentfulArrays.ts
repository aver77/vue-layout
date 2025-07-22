import type { IContentfulResourceFields } from '@/shared/ts/contentful';

export const sortContentfulArrays = <T extends { id: number }>(
    array: IContentfulResourceFields<T>[],
    asc?: boolean
) => {
    return array?.sort((item1, item2) => {
        const id1 = asc ? item1.fields.id : item2.fields.id;
        const id2 = asc ? item2.fields.id : item1.fields.id;

        return id1 - id2;
    });
};
