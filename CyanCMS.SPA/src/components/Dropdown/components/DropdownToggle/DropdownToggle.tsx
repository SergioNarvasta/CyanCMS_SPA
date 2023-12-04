/* eslint-disable @typescript-eslint/indent */
import { forwardRef } from 'react';

import ArrowDown from '../../../../assets/dashboard/arrow_down.svg';
import type { DropdownToggleProps } from './models';

import './DropdownToggle.scss';

export const DropdownToggle = forwardRef<
    HTMLButtonElement,
    DropdownToggleProps
>(({ children, onClick, rotateIcon, setRotateIcon, isDark = false }, ref) => {
    const handleClick = (e: any) => {
        e.preventDefault();
        onClick(e);
        setRotateIcon(!rotateIcon);
    };
    return (
        <button
            className={`custom-toggle${isDark ? '__dark' : ''}`}
            ref={ref}
            onClick={handleClick}
        >
            <span className="text-truncate">{children}</span>
            {isDark ? (
                <img
                    src={ArrowDown}
                    alt="arrowDown"
                    style={{
                        width: '11px',
                        height: '6px',
                    }}
                    className={`icon-dropdown ${
                        rotateIcon ? 'rotate-icon' : ''
                    }`}
                />
            ) : (
                <span
                    className={`icon-dropdown ${
                        rotateIcon ? 'rotate-icon' : ''
                    }`}
                ></span>
            )}
        </button>
    );
});
