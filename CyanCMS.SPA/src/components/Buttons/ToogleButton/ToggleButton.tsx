import ToggleButtonBootstrap from 'react-bootstrap/ToggleButton';

import type { ToggleButtonProps } from './';

import './ToggleButton.scss';

export const ToggleButton = ({
    label,
    isChecked,
    value,
    onChange,
}: ToggleButtonProps) => {
    return (
        <ToggleButtonBootstrap
            id={value}
            type="checkbox"
            variant="custom-toggle"
            checked={isChecked}
            value={value}
            onChange={onChange}
        >
            {label}
        </ToggleButtonBootstrap>
    );
};
