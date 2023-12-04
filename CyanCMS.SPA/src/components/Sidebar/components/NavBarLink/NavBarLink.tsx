import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { NavLink } from 'react-router-dom';

import { CustomToggle } from '@/components/Sidebar/components/CustomToggle';
import type { NavBarLinkProps } from '@/components/Sidebar/components/NavBarLink/models/NavBarLinkProps';
import { WrapperSubLink } from '@/components/Sidebar/components/NavBarSubLink/NavBarSubLink';
import { HoveredContext } from '@/components/Sidebar/context/HoveredContext';
import { ToolTipContainer } from '@/components/Tooltip';
import { useMerchantUserRoles } from '@/hooks';
import { OnboardingList } from '@/models';
import { useOnboardingOnProcess } from '@/pages/Onboarding/Seller/hooks';

import './NavBarLink.scss';
import { useUserRoles } from '@/hooks/useUserRoles';

export const NavBarLink = ({
    to,
    redirect,
    name,
    isLink = true,
    iconComponent,
    subLinks,
    disabled,
    merchantRoles,
}: NavBarLinkProps) => {
    const { isHovered } = useContext(HoveredContext);

    if (disabled) {
        return isHovered ? (
            <button className="link d-flex link-disabled border-0" disabled>
                {iconComponent}
                <span>{name}</span>
            </button>
        ) : (
            <ToolTipContainer tooltip={name} placement="right">
                <button
                    className="link d-flex link-disabled border-0 justify-content-center w-100"
                    disabled
                >
                    {iconComponent}
                </button>
            </ToolTipContainer>
        );
    }

    if (isLink) {
        return isHovered ? (
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `link d-flex flex-shrink-0 align-items-center ${
                        isActive ? 'link-active' : ''
                    }`
                }
                target={`${redirect === true ? '_blank' : ''}`}
            >
                {iconComponent}
                <span>{name}</span>
            </NavLink>
        ) : (
            <ToolTipContainer tooltip={name} placement="right">
                <NavLink
                    to={to}
                    className={({ isActive }) =>
                        `link d-flex flex-shrink-0 align-items-center ${
                            isActive ? 'link-active' : ''
                        } justify-content-center`
                    }
                    target={`${redirect === true ? '_blank' : ''}`}
                >
                    {iconComponent}
                </NavLink>
            </ToolTipContainer>
        );
    }

    return (
        <>
            {isHovered ? (
                <CustomToggle eventKey={to}>
                    <NavLink
                        to={to}
                        className={({ isActive }) =>
                            `link d-flex align-items-center ${
                                isActive ? 'link-active' : ''
                            }`
                        }
                        target={`${redirect === true ? '_blank' : ''}`}
                        onClick={(e) => e.preventDefault()}
                    >
                        {iconComponent}
                        <span>{name}</span>
                    </NavLink>
                </CustomToggle>
            ) : (
                <ToolTipContainer tooltip={name} placement="right">
                    <CustomToggle eventKey={to}>
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                                `link d-flex align-items-center ${
                                    isActive ? 'link-active' : ''
                                } justify-content-center`
                            }
                            target={`${redirect === true ? '_blank' : ''}`}
                            onClick={(e) => e.preventDefault()}
                        >
                            {iconComponent}
                        </NavLink>
                    </CustomToggle>
                </ToolTipContainer>
            )}

            <Accordion.Collapse eventKey={to}>
                <ul
                    className={`d-flex flex-column gap-2 mb-0 ${
                        !isHovered ? 'p-0' : ''
                    }`}
                >
                    {subLinks?.map((subLink) => (
                        <WrapperSubLink
                            key={subLink.name}
                            subLink={subLink}
                            parentMerchantRoles={merchantRoles ?? []}
                        />
                    ))}
                </ul>
            </Accordion.Collapse>
        </>
    );
};

export const WrapperNavLink = (navLink: NavBarLinkProps) => {
    const { isOnProgress, isLoading } = useOnboardingOnProcess();

    const { hasMerchantRoles } = useMerchantUserRoles(
        navLink.merchantRoles ?? [],
    );

    const { hasUserRoles } = useUserRoles(navLink.userRoles ?? []);

    // * Validate if the user has the necessary roles for the route
    if (navLink.userRoles && !hasUserRoles) {
        return null;
    }

    // * Validate if the user has the necessary merchant roles for the route
    if (!hasMerchantRoles) return null;

    // * Validations for onboardint seeller
    if (navLink.to === OnboardingList.ONBOARDING_SELLER) {
        return <NavBarLink {...navLink} disabled={isOnProgress || isLoading} />;
    }

    // // * Validations for Beneficioz

    // if (
    //     (navLink.to === 'beneficioz' && disabledCampaign) ||
    //     (navLink.to === 'beneficioz' && isLoadingRelationshipProgram)
    // ) {
    //     return null;
    // }

    return <NavBarLink {...navLink} />;
};
