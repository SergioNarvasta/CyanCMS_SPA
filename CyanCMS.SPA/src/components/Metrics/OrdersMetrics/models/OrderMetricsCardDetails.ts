import type { IMetricsCard } from '../../components/MetricsCard/models/IMetricsCard';

export interface OrderMetricsCardDetails {
    delivered: IMetricsCard;
    cancelled: IMetricsCard;
    outOfTime: IMetricsCard;
}
