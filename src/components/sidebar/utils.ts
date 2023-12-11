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

export const scrollIntoViewAndWait = (element?: HTMLElement): Promise<void> => {
    const scroll = () =>
        element
            ? element.scrollIntoView({
                  behavior: 'smooth'
              })
            : window.scrollTo({ top: 0, behavior: 'smooth' });

    return new Promise((resolve) => {
        if ('onscrollend' in window) {
            document.addEventListener('scrollend', () => resolve(), {
                once: true
            });
            scroll();
        } else {
            scroll();
            resolve();
        }
    });
};
