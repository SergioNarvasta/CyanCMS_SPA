import type { CommonProps } from '../../models';

import './SubTitle.scss';

export const SubTitle = ({
    text,
    className,
    style,
}: { text: string } & Partial<CommonProps>) => {
    return (
        <p className={`subtitle ${className ?? ''}`} style={style}>
            {text}
        </p>
    );
};
