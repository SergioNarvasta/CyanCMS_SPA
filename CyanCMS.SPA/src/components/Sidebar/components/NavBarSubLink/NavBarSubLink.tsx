import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import type { CustomLink } from '@/components/Sidebar/components/NavBarLink/models/NavBarLinkProps';
import { HoveredContext } from '@/components/Sidebar/context/HoveredContext';
import type { IHoveredContext } from '@/components/Sidebar/context/models/IHoveredContext';
import { ToolTipContainer } from '@/components/Tooltip';
import { useMerchantUserRoles } from '@/hooks';
import type { MerchantUserRolesEmum } from '@/models';

import './NavBarSubLink.scss';

export const NavBarSubLink = ({
    name,
    to,
    redirect,
    iconComponent,
}: CustomLink) => {
    const { isHovered } = useContext<IHoveredContext>(HoveredContext);

    return (
        <li>
            {isHovered ? (
                <NavLink
                    to={to}
                    className={({ isActive }) =>
                        `sub-link d-flex align-items-center ${
                            isActive ? 'sub-link__active' : ''
                        }`
                    }
                    target={`${redirect === true ? '_blank' : ''}`}
                >
                    {iconComponent}
                    {isHovered && (
                        <span className="sub-link__text">{name}</span>
                    )}
                </NavLink>
            ) : (
                <ToolTipContainer tooltip={name} placement="right">
                    <NavLink
                        to={to}
                        className={({ isActive }) =>
                            `sub-link d-flex align-items-center ${
                                isActive ? 'sub-link__active' : ''
                            } m-0 justify-content-center`
                        }
                        target={`${redirect === true ? '_blank' : ''}`}
                    >
                        {iconComponent}
                    </NavLink>
                </ToolTipContainer>
            )}
        </li>
    );
};

export const WrapperSubLink = ({
    subLink,
    parentMerchantRoles,
}: {
    subLink: CustomLink;
    parentMerchantRoles: MerchantUserRolesEmum[];
}) => {
    const { hasMerchantRoles } = useMerchantUserRoles(
        subLink.merchantRoles ?? parentMerchantRoles,
    );

    // const { hasCompletedCampaigns, isLoading } = useCompletedCampaigns();

    // if (
    //     (subLink.to === 'beneficioz/canjeo' && !hasCompletedCampaigns) ||
    //     (subLink.to === 'beneficioz/canjeo' && isLoading)
    // ) {
    //     return null;
    // }

    if (!hasMerchantRoles) return null;

    return <NavBarSubLink {...subLink} />;
};
