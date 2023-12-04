import type { OrderMetricsProps } from '../../OrdersMetrics/models/IOrderMetrics';
import type { IAverageTicket } from '../components/AverageTicket/model/IAverageTicket';
import type { StoreMetricCardsDetails } from '../components/MetricsCardManager/models/IMetricsCardManager';
import type { SaleMetricsChartData } from '../components/SaleMetricChart/models/ISaleMetricChart';

export interface ISaleMetrics {
    storeMetricCardsDetails: StoreMetricCardsDetails;
    storeMetricsChartDetails: SaleMetricsChartData;
    storeAverageTicket: IAverageTicket;
}

export interface SaleMetricsProps extends OrderMetricsProps {}
