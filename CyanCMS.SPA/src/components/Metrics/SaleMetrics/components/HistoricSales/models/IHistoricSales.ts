import type { StoreMetricCardsDetails } from '../../MetricsCardManager/models/IMetricsCardManager';
import type { SaleMetricsChartData } from '../../SaleMetricChart/models/ISaleMetricChart';

export interface IHistoricSales {
    storeMetricCardsDetails: StoreMetricCardsDetails;
    storeMetricsChartDetails: SaleMetricsChartData;
}
