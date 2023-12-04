import { useAppSelector } from '../../../hooks';
import { LocalStorage } from '../../../models';
import { Badge } from '../../Badge';
import { Spinner } from '../../Spinner';
import { CardContainer } from '../CardContainer';
import { Raiting, ReviewBar } from './components';
import { useReviews } from './hooks';

import './CardReview.scss';

export const CardReview = (): JSX.Element => {
    const { currentStore, stores } = useAppSelector(
        (state) => state.merchantData,
    );

    const { totalReviews, avgStars, count, isLoading } = useReviews({
        currentStore:
            currentStore?.id ??
            +(stores[0]?.id ?? localStorage.getItem(LocalStorage.STORE_ID)),
    });

    return (
        <CardContainer
            width={340}
            maxWidth={340}
            maxHeight={356}
            height={356}
            extraClass="w-100 p-3 card-review__container"
        >
            <div
                className="d-flex justify-content-between align-items-center"
                style={{ minHeight: 55 }}
            >
                <h3 className="m-0">
                    <Badge title="Calificaciones" />
                </h3>
                <div className="card-review d-flex justify-content-center align-items-center">
                    <span>
                        {avgStars === 0 || isLoading
                            ? '--'
                            : avgStars.toFixed(1)}
                    </span>
                </div>
            </div>
            <div className="d-flex justify-content-between py-2">
                <span className="text-decoration-underline">
                    {isLoading ? '--' : totalReviews} reviews
                </span>
                {!isLoading && <Raiting stars={Math.floor(avgStars)} />}
            </div>
            <div className="mt-2 ps-3 d-flex flex-column gap-3">
                {isLoading ? (
                    <div className="d-flex justify-content-center">
                        <Spinner />
                    </div>
                ) : (
                    count !== undefined &&
                    totalReviews !== undefined &&
                    totalReviews !== 0 &&
                    Array.from({ length: 5 }).map((_, index) => (
                        <ReviewBar
                            key={index}
                            level={5 - index}
                            width={count[5 - index] / totalReviews}
                            reviewsPerLevel={count[5 - index]}
                        />
                    ))
                )}
            </div>
        </CardContainer>
    );
};
