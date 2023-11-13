import { onMounted, Ref } from "vue";

export default function (
    scrollElemRef: Ref<HTMLElement | null>,
    setScrollMethod: (v: number) => void,
    lastElemRef?: boolean
) {
    onMounted(() => {
        const elem = scrollElemRef.value;

        if (elem) {
            const elemRect = elem.getBoundingClientRect();

            setScrollMethod(
                elemRect.y +
                    window.scrollY -
                    (lastElemRef ? elemRect.height : 0)
            );
        }
    });
}
