import {
    aboutId,
    contactsId,
    experienceId,
    projectsId
} from '@/shared/constants/elementsIds';

import { SidebarKeys } from '@/shared/constants/enums/sidebarKeys';

export const linkData = {
    [SidebarKeys.About]: aboutId,
    [SidebarKeys.Projects]: projectsId,
    [SidebarKeys.Experience]: experienceId,
    [SidebarKeys.Contact]: contactsId
};
