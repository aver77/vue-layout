import { defineStore } from "pinia";
import { scrollSBStore } from "./storeNames";

interface IUseScrollSBState {
    // aboutScrollValue: number | null;
    // projectsScrollValue: number | null;
    // experienceScrollValue: number | null;
    // contactScrollValue: number | null;

    aboutScrollRect: DOMRect | null;
    projectsScrollRect: DOMRect | null;
    experienceScrollRect: DOMRect | null;
    contactScrollRect: DOMRect | null;
}

export const useScrollSBStore = defineStore(scrollSBStore, {
    state: (): IUseScrollSBState => {
        return {
            // aboutScrollValue: null,
            // projectsScrollValue: null,
            // experienceScrollValue: null,
            // contactScrollValue: null
            aboutScrollRect: null,
            projectsScrollRect: null,
            experienceScrollRect: null,
            contactScrollRect: null
        };
    },
    actions: {
        setAboutScrollValue(scrollValue: DOMRect) {
            this.aboutScrollRect = scrollValue;
        },
        setProjectsScrollValue(scrollValue: DOMRect) {
            this.projectsScrollRect = scrollValue;
        },
        setExperienceScrollValue(scrollValue: DOMRect) {
            this.experienceScrollRect = scrollValue;
        },
        setContactScrollValue(scrollValue: DOMRect) {
            this.contactScrollRect = scrollValue;
        }
    }
});
