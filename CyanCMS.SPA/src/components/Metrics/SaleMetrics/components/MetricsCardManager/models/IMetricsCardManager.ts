import type { IMetricsCard } from '../../../../components/MetricsCard/models/IMetricsCard';

export interface StoreMetricCardsDetails {
    saleSummary: IMetricsCard;
    totalSalesSummary: IMetricsCard;
    subsidySalesSummary: IMetricsCard;
    promotionsSummary: IMetricsCard;
    // specialPricesSummary: IMetricsCard;
}
