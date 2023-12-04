import { useMemo, useState } from 'react';
import DropdownBootstrap from 'react-bootstrap/Dropdown';

import type { ISelectOption } from '../Select';
import { DropdownMenu, DropdownToggle } from './components';
import { type DropdownProps } from './models';

import './Dropdown.scss';

export const Dropdown = ({
    options,
    currentOption,
    handleDropdown,
    className,
    isDark = false,
    placeholder,
}: DropdownProps) => {
    const [rotateIcon, setRotateIcon] = useState<boolean>(false);

    const [currentOptionState, setCurrentOptionState] =
        useState<ISelectOption | null>(currentOption ?? null);

    const filterOptions = useMemo(
        () =>
            options.filter(({ value }) => value !== currentOptionState?.value),
        [options, currentOptionState?.value],
    );

    return (
        <DropdownBootstrap
            className={className}
            onToggle={(e) => {
                setRotateIcon(e);
            }}
        >
            <DropdownBootstrap.Toggle
                as={DropdownToggle}
                id="dropdown-basic"
                rotateIcon={rotateIcon}
                setRotateIcon={setRotateIcon}
                isDark={isDark}
            >
                {currentOptionState?.name ?? placeholder ?? ''}
            </DropdownBootstrap.Toggle>

            <DropdownBootstrap.Menu
                as={DropdownMenu}
                className={isDark ? 'custom-dropdown__menu-dark' : ''}
            >
                {filterOptions.map((option) => (
                    <DropdownBootstrap.Item
                        key={option.value}
                        as="button"
                        className={`custom-dropdown__item${
                            isDark ? '-dark' : ''
                        }`}
                        active={option.value === currentOptionState?.value}
                        onClick={() => {
                            setCurrentOptionState(option);
                            setRotateIcon(false);
                            handleDropdown(option.value);
                        }}
                    >
                        <span>{option.name}</span>
                        {!isDark && <span style={{ width: '0.5rem' }}></span>}
                    </DropdownBootstrap.Item>
                ))}
            </DropdownBootstrap.Menu>
        </DropdownBootstrap>
    );
};
