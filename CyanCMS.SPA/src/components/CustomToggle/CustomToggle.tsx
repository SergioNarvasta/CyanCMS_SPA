import { forwardRef } from 'react';

import './CustomToggle.scss';
import type { ICustomToggle } from './models/CustomToggle.interface';

export const CustomToggle = forwardRef(
    (
        {
            children,
            onClick,
            toggleStyle,
            handleDropdownIconClick,
            dropDownOpen,
        }: ICustomToggle,
        ref,
    ): JSX.Element => {
        return (
            <div className="custom__toggle_div_container">
                <div
                    ref={ref as React.RefObject<HTMLDivElement>}
                    onClick={(e) => {
                        e.preventDefault();
                        onClick(e);
                        handleDropdownIconClick();
                    }}
                    className="custom__toggle_div"
                    style={toggleStyle}
                >
                    {children}
                </div>
                {dropDownOpen ? (
                    <span
                        className="icon-dropdown active"
                        onClick={handleDropdownIconClick}
                    ></span>
                ) : (
                    <span
                        className="icon-dropdown"
                        onClick={handleDropdownIconClick}
                    ></span>
                )}
            </div>
        );
    },
);
