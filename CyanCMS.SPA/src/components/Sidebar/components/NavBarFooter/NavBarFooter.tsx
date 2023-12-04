import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import {
    MdOutlineKeyboardDoubleArrowLeft,
    MdOutlineKeyboardDoubleArrowRight,
    MdOutlinePersonOutline,
    MdOutlineSubdirectoryArrowLeft,
    MdOutlineSupportAgent,
} from 'react-icons/md';

import { ToolTipContainer } from '@/components/Tooltip';
import { useAppSelector } from '@/hooks';
import { HoveredContext } from '../../context/HoveredContext';
import type { IHoveredContext } from '../../context/models/IHoveredContext';
import { defaultIconProps } from '../NavBarNavigation/data';

import './NavBarFooter.scss';

export const NavBarFooter = () => {
    const { isHovered, onHover, onLeave } =
        useContext<IHoveredContext>(HoveredContext);

    const { profile } = useAppSelector((state) => state.user);

    const openHelp = () => window.open(import.meta.env.VITE_JUNTOZ_HELP_DESK);

    const moveToMC1 = () =>
        window.location.replace(import.meta.env.VITE_MERCHANT_CENTRAL_V1_URL);

    return (
        <div
            className={`flex-shrink-0 ${
                isHovered ? 'sidebar-footer__navigation' : 'p-3'
            } d-flex flex-column justify-content-center align-items-center gap-3`}
        >
            <ToolTipContainer tooltip={profile.email} placement="right">
                <div
                    className="d-flex gap-3 align-items-center sidebar-footer__user text-white"
                    style={{
                        width: isHovered ? '204px' : '100%',
                    }}
                >
                    <MdOutlinePersonOutline
                        {...defaultIconProps}
                        className="text-green"
                    />
                    {isHovered && (
                        <span
                            className="text-truncate"
                            style={{ fontSize: '.75rem' }}
                        >
                            {profile.email}
                        </span>
                    )}
                </div>
            </ToolTipContainer>
            <div
                className={`${
                    isHovered
                        ? 'd-flex flex-row justify-content-between w-100 m-auto'
                        : 'd-flex flex-column gap-3'
                }`}
            >
                <Button variant="footer-navigation">
                    <MdOutlineSubdirectoryArrowLeft
                        {...defaultIconProps}
                        onClick={moveToMC1}
                    />
                </Button>
                <Button variant="footer-navigation">
                    <MdOutlineSupportAgent
                        {...defaultIconProps}
                        onClick={openHelp}
                    />
                </Button>
                {isHovered ? (
                    <Button
                        variant="footer-navigation"
                        onClick={onLeave}
                        title="arrow-collapse"
                    >
                        <MdOutlineKeyboardDoubleArrowLeft
                            {...defaultIconProps}
                        />
                    </Button>
                ) : (
                    <Button
                        variant="footer-navigation"
                        onClick={onHover}
                        title="arrow-expand"
                    >
                        <MdOutlineKeyboardDoubleArrowRight
                            {...defaultIconProps}
                        />
                    </Button>
                )}
            </div>
        </div>
    );
};
