import { Tab, Tabs } from 'react-bootstrap';

import { AdaptStoreSaleMetrics } from '../../../adapters/Response/Metrics/Sale/AdaptStoreSaleMetrics';
import { useApiServiceUrl, useAppSelector } from '../../../hooks';
import { EndpointsName } from '../../../models';
import { useGetStoreSaleMetricsQuery } from '../../../services';
import { Spinner } from '../../Spinner';
import { AverageTicket } from './components/AverageTicket/AverageTicket';
import { HistoricSales } from './components/HistoricSales/HistoricSales';
import type { SaleMetricsProps } from './models/ISaleMetrics';

import './SaleMetrics.scss';

export const SaleMetrics = ({
    startDate,
    endDate,
    startDatePrevPeriod,
    endDatePrevPeriod,
}: SaleMetricsProps) => {
    const { baseUrl } = useApiServiceUrl(EndpointsName.SALES_API);

    const { merchantId, currentStore } = useAppSelector(
        (state) => state.merchantData,
    );

    const skip =
        merchantId === 0 ||
        currentStore?.id === undefined ||
        startDate === '' ||
        endDate === '' ||
        startDatePrevPeriod === '' ||
        endDatePrevPeriod === '';

    const { data, isLoading } = useGetStoreSaleMetricsQuery(
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
                data: data ? AdaptStoreSaleMetrics(data) : undefined,
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
                    title="Histórico de ventas"
                    key={'Histórico de ventas'}
                    mountOnEnter={true}
                >
                    <HistoricSales
                        storeMetricCardsDetails={data.storeMetricCardsDetails}
                        storeMetricsChartDetails={data.storeMetricsChartDetails}
                    />
                </Tab>
                <Tab
                    eventKey={2}
                    title="Ticket Promedio"
                    key={'Ticket Promedio'}
                    mountOnEnter={true}
                >
                    <AverageTicket {...data.storeAverageTicket} />
                </Tab>
            </Tabs>
        </div>
    );
};
