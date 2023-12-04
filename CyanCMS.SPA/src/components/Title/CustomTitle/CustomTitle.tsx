import type { CustomTitleProps } from './models/CustomTitleProps';

import './CustomTitle.scss';

export const CustomTitle = ({ text, style, className }: CustomTitleProps) => {
    return (
        <p className={`custom-title m-0 ${className ?? ''}`} style={style}>
            {text}
        </p>
    );
};
