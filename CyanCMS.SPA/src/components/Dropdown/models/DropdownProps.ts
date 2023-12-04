import type { BasicSelectProps } from '../../Select';

export interface DropdownProps extends BasicSelectProps {
    isDark?: boolean;
    className?: string;
    handleDropdown: (value: any) => void;
}
