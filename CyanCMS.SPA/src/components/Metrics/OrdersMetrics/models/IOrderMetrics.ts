import type { StoreTotalData } from '../../../../models/Response/Metrics/GetStoreOrderMetricsDTO';
import type { OrderMetricsCardDetails } from './OrderMetricsCardDetails';

export interface IOrderMetrics {
    orderMetricsCardDetails: OrderMetricsCardDetails;
    orderMetricsByDayPeriods: OrderSummmaryByDayPeriods[];
}

export interface OrderSummmaryByDayPeriods {
    rangeDay: [string, string];
    current: StoreTotalData;
    previous: StoreTotalData;
}

export interface OrderMetricsProps {
    startDate: string;
    endDate: string;
    startDatePrevPeriod: string;
    endDatePrevPeriod: string;
}
