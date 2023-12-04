import type { CardContainerProps } from './models';

import './CardContainer.scss';

export const CardContainer = ({
    children,
    width,
    height,
    maxWidth,
    maxHeight,
    extraClass = '',
}: CardContainerProps): JSX.Element => {
    return (
        <div
            className={`card-container ${extraClass}`}
            style={{ maxWidth, maxHeight, height, width }}
        >
            {children}
        </div>
    );
};
