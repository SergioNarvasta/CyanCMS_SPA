import type { CommonProps } from '@/models';

export const VerticalText = ({
    text,
    style,
    className,
}: { text: string } & Partial<CommonProps>) => {
    return (
        <p
            className={`text-center mb-0 ${className ?? ''}`}
            style={{
                writingMode: 'vertical-lr',
                transform: 'rotate(-180deg)',
                ...style,
            }}
        >
            {text}
        </p>
    );
};
