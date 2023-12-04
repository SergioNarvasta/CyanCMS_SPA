import { StarIcon } from '../../../../../assets/dashboard/StarIcon';
import './Raiting.scss';

export const Raiting = ({ stars }: { stars: number }): JSX.Element => {
    return (
        <div className="stars-raiting-container">
            {Array.from({ length: 5 }).map((_, index) => (
                <span
                    key={index}
                    className={`raiting-star
                        ${index < stars ? 'active-color' : 'inactive-color'}`}
                >
                    <StarIcon />
                </span>
            ))}
        </div>
    );
};
