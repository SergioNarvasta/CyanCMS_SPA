import type { MerchantUserRolesEmum, UserRoles } from '@/models';

export interface CustomLink {
    name: string;
    to: string;
    redirect?: boolean;
    iconComponent?: React.ReactNode;
    isLink?: boolean;
    disabled?: boolean;
    merchantRoles?: MerchantUserRolesEmum[];
    userRoles?: UserRoles[];
}

export interface NavBarLinkProps extends CustomLink {
    subLinks?: CustomLink[];
    show?: boolean;
}
