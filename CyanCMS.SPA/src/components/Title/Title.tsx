import type { TitleProps } from './models';

import './Title.scss';

export const Title = ({ title, style, className }: TitleProps) => {
    return (
        <h1 className={`title m-0 ${className ?? ''}`} style={style}>
            {title}
        </h1>
    );
};
