import BadgeBootstrap from 'react-bootstrap/Badge';

import type { BadgeProps } from './models';

import './Badge.scss';

export const Badge = ({ title, minWidth = 126 }: BadgeProps): JSX.Element => {
    return (
        <BadgeBootstrap
            bg="custom"
            className="d-flex text-wrap py-2 text-start"
            style={{ minWidth }}
        >
            {title}
        </BadgeBootstrap>
    );
};
