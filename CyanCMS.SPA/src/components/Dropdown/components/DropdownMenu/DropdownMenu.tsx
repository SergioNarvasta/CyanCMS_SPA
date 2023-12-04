import { forwardRef } from 'react';

import type { DropdownMenuProps } from './models';

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
    ({ children, style, className }, ref) => {
        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby="aria-labelledby"
            >
                <ul className="list-unstyled m-0 text-center">{children}</ul>
            </div>
        );
    },
);
