import { AdaptStoreProductMetric } from '../../../adapters/Response/Metrics/Products/AdaptStoreProductMetrics';
import { useApiServiceUrl, useAppSelector } from '../../../hooks';
import { EndpointsName } from '../../../models';
import { useGetStoreProductsMetricsQuery } from '../../../services';
import { Spinner } from '../../Spinner';
import { ProductMetricsByPeriod } from './components/ProductMetricsByPeriod/ProductMetricsByPeriod';
import type { ProductMetricsProsp } from './models/IProductMetrics';

export const ProductMetrics = ({
    startDate,
    endDate,
    startDatePrevPeriod,
    endDatePrevPeriod,
}: ProductMetricsProsp) => {
    const { merchantId, currentStore } = useAppSelector(
        (state) => state.merchantData,
    );

    const { baseUrl } = useApiServiceUrl(EndpointsName.SALES_API);

    const skip =
        merchantId === 0 ||
        currentStore?.id === undefined ||
        startDate === '' ||
        endDate === '' ||
        startDatePrevPeriod === '' ||
        endDatePrevPeriod === '';

    const { data, isLoading } = useGetStoreProductsMetricsQuery(
        {
            baseUrl,
            currentPeriodStartDate: startDate,
            currentPeriodEndDate: endDate,
            previousPeriodStartDate: startDatePrevPeriod,
            previousPeriodEndDate: endDatePrevPeriod,
        },
        {
            skip,
            selectFromResult: ({ data, ...rest }) => ({
                data: data ? AdaptStoreProductMetric(data) : undefined,
                ...rest,
            }),
        },
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (data === undefined || data === null) {
        return <></>;
    }

    return (
        <div className="row m-auto mt-3 pb-3 gap-3">
            <ProductMetricsByPeriod
                periodo="actual"
                periodProductDetails={data.currentPeriodProducts}
                key={'actual'}
                periodDates={`${startDate} - ${endDate}`}
            />
            <ProductMetricsByPeriod
                periodo="anterior"
                periodProductDetails={data.previousPeriodProducts}
                key={'anterior'}
                periodDates={`${startDatePrevPeriod} - ${endDatePrevPeriod}`}
            />
        </div>
    );
};
