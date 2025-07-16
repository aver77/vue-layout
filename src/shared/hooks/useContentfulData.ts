import { type Ref, ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';

const useContentfulData = <T>(
    getContentfulData: (locale: string, ...args: unknown[]) => Promise<T>,
    ...args: unknown[]
) => {
    const data = ref(null) as Ref<T | null>;

    const { locale } = useI18n({ useScope: 'global' });

    watchEffect(async () => {
        const info = await getContentfulData(locale.value, ...args);
        data.value = info;
    });

    return data;
};
export default useContentfulData;
