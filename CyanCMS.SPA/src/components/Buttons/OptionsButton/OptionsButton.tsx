import { forwardRef } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown, { type DropdownProps } from 'react-bootstrap/Dropdown';
import { MdMoreVert } from 'react-icons/md';

import type { CommonProps } from '@/models';

export const OptionsButton = ({
    isDisabled,
    children,
}: { isDisabled?: boolean } & Pick<CommonProps, 'children'>) => {
    return (
        <Dropdown>
            <Dropdown.Toggle
                split
                isDisabled={Boolean(isDisabled)}
                as={DropdownToggle}
            />
            <Dropdown.Menu>{children}</Dropdown.Menu>
        </Dropdown>
    );
};

export const DropdownToggle = forwardRef<
    HTMLButtonElement,
    DropdownProps & { isDisabled: boolean }
>(({ onClick, isDisabled }, ref) => {
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault();
        onClick?.(e);
    };

    return (
        <Button
            ref={ref}
            variant="purple-icon border-0 p-0"
            onClick={handleClick}
            style={{
                background: 'none',
                color: 'black',
                fontSize: 20,
            }}
            disabled={isDisabled}
        >
            <MdMoreVert />
        </Button>
    );
});
