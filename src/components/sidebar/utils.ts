export const isElementInViewport = (
    el: HTMLElement | null,
    partial: boolean = true
) => {
    if (el) {
        const eleTop = el.offsetTop;
        const eleBottom = eleTop + el.clientHeight;

        const containerTop = window.scrollY;
        const containerBottom = containerTop + window.innerHeight;

        if (partial) {
            return (
                (eleTop >= containerTop && eleBottom <= containerBottom) ||
                // Some part of the element is visible in the container
                (eleTop < containerTop && containerTop < eleBottom) ||
                (eleTop < containerBottom && containerBottom < eleBottom)
            );
        } else {
            return eleTop >= containerTop && eleBottom <= containerBottom;
        }
    }
};
