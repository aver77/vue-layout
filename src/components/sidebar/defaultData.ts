import {
    aboutId,
    contactsId,
    experienceId,
    projectsId
} from "@/shared/constants/elementsIds";

export enum SidebarKeys {
    About = "About",
    Projects = "Projects",
    Experience = "Experience",
    Contact = "Contact"
}

export const linkData = {
    [SidebarKeys.About]: aboutId,
    [SidebarKeys.Projects]: projectsId,
    [SidebarKeys.Experience]: experienceId,
    [SidebarKeys.Contact]: contactsId
};
