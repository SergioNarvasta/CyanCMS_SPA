import type { CommonProps } from '@/models';

export const Divider = ({ className, style }: Partial<CommonProps>) => {
    return (
        <div
            className={className}
            style={{
                height: '.125rem',
                backgroundColor: '#F3CDFF',
                ...style,
            }}
        ></div>
    );
};
