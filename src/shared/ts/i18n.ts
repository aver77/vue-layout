import type { TranslateResult } from 'vue-i18n';

export type TranslateFunction = (
    key: unknown,
    named?: Record<string, unknown>
) => TranslateResult;
