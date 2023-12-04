import type { ReactNode } from 'react';

export interface ICustomToggle {
    children: ReactNode;
    onClick: (event: any) => void;
    toggleStyle?: React.CSSProperties;
    handleDropdownIconClick: () => void;
    dropDownOpen: boolean;
}
