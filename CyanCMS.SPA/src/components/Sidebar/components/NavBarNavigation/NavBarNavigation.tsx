import Accordion from 'react-bootstrap/Accordion';
import { MdAdminPanelSettings } from 'react-icons/md';

import { useAppSelector } from '../../../../hooks';
import { UserRoles } from '../../../../models';
import type { RootState } from '../../../../redux/store';
import { NavBarLink, WrapperNavLink } from '../NavBarLink/NavBarLink';
import { defaultIconProps, links } from './data';

import './NavBarNavigation.scss';

export const NavBarNavigation = () => {
    const userRoles: string[] = useAppSelector<string[]>(
        (state: RootState) => state?.user?.profile?.roles ?? [],
    );

    return (
        <Accordion
            alwaysOpen
            className="d-flex flex-column gap-2 flex-grow-1 navbar-navigation"
        >
            {userRoles?.includes(UserRoles.KAMADMIN) && (
                <NavBarLink
                    name="Admin"
                    to="admin"
                    iconComponent={
                        <MdAdminPanelSettings {...defaultIconProps} />
                    }
                />
            )}
            {links.map(
                (link) =>
                    link.show && <WrapperNavLink key={link.name} {...link} />,
            )}
        </Accordion>
    );
};
