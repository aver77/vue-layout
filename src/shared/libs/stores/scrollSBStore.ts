import { defineStore } from "pinia";
import { scrollSBStore } from "./storeNames";

interface IUseScrollSBState {
    aboutScrollValue: number | null;
    projectsScrollValue: number | null;
    experienceScrollValue: number | null;
    contactScrollValue: number | null;
}

export const useScrollSBStore = defineStore(scrollSBStore, {
    state: (): IUseScrollSBState => {
        return {
            aboutScrollValue: null,
            projectsScrollValue: null,
            experienceScrollValue: null,
            contactScrollValue: null
        };
    },
    actions: {
        setAboutScrollValue(scrollValue: number) {
            this.aboutScrollValue = scrollValue;
        },
        setProjectsScrollValue(scrollValue: number) {
            this.projectsScrollValue = scrollValue;
        },
        setExperienceScrollValue(scrollValue: number) {
            this.experienceScrollValue = scrollValue;
        },
        setContactScrollValue(scrollValue: number) {
            this.contactScrollValue = scrollValue;
        }
    }
});
