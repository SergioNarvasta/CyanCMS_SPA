import { Tab, Tabs } from 'react-bootstrap';

import { AdaptStoreOrderMetrics } from '../../../adapters/Response/Metrics/Orders/AdaptStoreOrderMetrics';
import { useApiServiceUrl, useAppSelector } from '../../../hooks';
import { EndpointsName } from '../../../models';
import { useGetStoreOrderMetricsQuery } from '../../../services';
import { Spinner } from '../../Spinner';
import { OrderChart } from './components/OrderChart/OrderChart';
import { OrderMetricsCardManager } from './components/OrderMetricsCardManager/OrderMetricsCardManager';
import type { OrderMetricsProps } from './models/IOrderMetrics';

export const OrderMetrics = ({
    startDate,
    endDate,
    startDatePrevPeriod,
    endDatePrevPeriod,
}: OrderMetricsProps) => {
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

    const { data, isLoading } = useGetStoreOrderMetricsQuery(
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
                data: data ? AdaptStoreOrderMetrics(data) : undefined,
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
        <div className="sale-metrics-tab-container row m-auto mt-3 pb-3">
            <Tabs defaultActiveKey={1}>
                <Tab
                    eventKey={1}
                    title="Histórico de órdenes"
                    key={'Histórico de órdenes'}
                >
                    <div className="d-flex flex-column gap-2">
                        <OrderMetricsCardManager
                            {...data.orderMetricsCardDetails}
                        />
                        <OrderChart chartData={data.orderMetricsByDayPeriods} />
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default OrderMetrics;
