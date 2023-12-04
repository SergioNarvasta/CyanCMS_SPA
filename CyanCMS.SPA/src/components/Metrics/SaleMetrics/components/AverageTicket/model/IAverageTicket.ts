import type { IMetricsCard } from '../../../../components/MetricsCard/models/IMetricsCard';
import type { SaleMetricsChartData } from '../../SaleMetricChart/models/ISaleMetricChart';

export interface IAverageTicket {
    actualPeriodAverageSummary: IMetricsCard;
    averageSaleMetricBarChartDetails: SaleMetricsChartData;
}
