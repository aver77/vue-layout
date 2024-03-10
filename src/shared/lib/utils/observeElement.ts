import { Ref } from 'vue';

export const observeElement = (
    ref: Ref<HTMLElement | null>,
    setters: Ref<boolean>[]
) => {
    if (ref) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((el) => {
                if (el.isIntersecting) {
                    setters.forEach((setEl) => (setEl.value = true));
                }
            });
        });

        observer.observe(ref.value as Element);
    }
};
