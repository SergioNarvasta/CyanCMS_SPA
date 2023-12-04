import { StarIcon } from '../../../../../assets/dashboard/StarIcon';
import type { ReviewBarProps } from './models';

import './ReviewBar.scss';

export const ReviewBar = ({
    level,
    width,
    reviewsPerLevel,
}: ReviewBarProps): JSX.Element => {
    return (
        <div className="d-flex gap-2 m-0">
            <span>{level}</span>
            <div className="review-bar__icon d-flex align-items-center justify-content-center">
                <StarIcon />
            </div>
            {Boolean(width) && width !== 0 && (
                <span
                    title={`${reviewsPerLevel}`}
                    className="d-flex justify-content-start review-bar"
                    style={{
                        width: `${
                            !Number.isNaN(width) && width !== undefined
                                ? (width * 100).toFixed(2)
                                : 0
                        }%`,
                        minWidth: '5%',
                        background: `rgba(128, 56, 166, ${
                            !Number.isNaN(width) && width !== undefined
                                ? +width.toFixed(1) < 0.1
                                    ? 0.1
                                    : width.toFixed(1)
                                : 0
                        })`,
                    }}
                ></span>
            )}
        </div>
    );
};
