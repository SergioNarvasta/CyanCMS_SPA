import { useApiServiceUrl } from '@/hooks';
import { EndpointsName } from '@/models';
import { useGetReviewsQuery } from '@/services';

interface useGetReviewsParams {
    currentStore: number;
}

export const useReviews = ({ currentStore }: useGetReviewsParams) => {
    const { baseUrl } = useApiServiceUrl(EndpointsName.REVIEW_API);

    const { data, isLoading, isFetching, isError } = useGetReviewsQuery(
        {
            baseUrl,
            storeId: currentStore,
        },
        { skip: currentStore === undefined },
    );

    const scores = data?.items?.map((r) => Math.trunc(r.score));

    const count = scores?.reduce((accumulator: any, value) => {
        return {
            ...accumulator,
            [value]: (+accumulator[value] || 0) + 1,
        };
    }, {});

    const stars =
        data?.items?.reduce(
            (accumulator, { score }) => accumulator + score,
            0,
        ) ?? 0;

    const avgStars = isError ? 0 : stars / (data?.totalCount ?? 1) || 0;

    return {
        totalReviews: isError ? 0 : data?.totalCount,
        isLoading: isLoading || isFetching,
        count,
        avgStars,
    };
};
