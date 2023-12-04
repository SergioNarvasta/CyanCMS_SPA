import type { DropdownCalendarProps } from './models/';

import './DropdownCalendar.scss';

export const DropdownCalendar = ({
    text,
    children,
    showContent,
    setShowContent,
}: DropdownCalendarProps) => {
    return (
        <div className="dropdown-calendar w-100">
            <button
                className="dropdown-calendar__button"
                onClick={() => {
                    setShowContent(!showContent);
                }}
            >
                <span>{text}</span>
                <span
                    className={`icon-dropdown ${
                        showContent ? 'rotate-icon' : ''
                    } `}
                ></span>
            </button>
            {showContent && (
                <div className="dropdown-calendar__content">{children}</div>
            )}
        </div>
    );
};
