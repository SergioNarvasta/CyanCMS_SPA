import type { CommonProps } from '@/models';

import './BadgeIcon.scss';

export const BadgeIcon = ({
    icon,
    isDisabled,
    className,
}: {
    icon: React.ReactNode;
    isDisabled?: boolean;
} & Partial<Pick<CommonProps, 'className'>>) => {
    return (
        <div
            className={`d-flex badge-icon align-items-center justify-content-center rounded-circle ${
                isDisabled
                    ? 'text-secondary badge-icon__disabled'
                    : 'text-purple'
            } ${className ?? ''}`}
        >
            {icon}
        </div>
    );
};
