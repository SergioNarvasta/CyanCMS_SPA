import type { ProductDetail } from '../../../../../../models/Response/Metrics/GetStoreProductMetricsDTO';

export interface IProductMetricsByPeriod {
    periodo: string;
    periodProductDetails: ProductDetail[];
    periodDates: string;
}
