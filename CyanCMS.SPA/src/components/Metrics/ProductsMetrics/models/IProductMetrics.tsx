import type { ProductDetail } from '../../../../models/Response/Metrics/GetStoreProductMetricsDTO';
import type { OrderMetricsProps } from '../../OrdersMetrics/models/IOrderMetrics';

export interface IProductMetrics {
    currentPeriodProducts: ProductDetail[];
    previousPeriodProducts: ProductDetail[];
}

export interface ProductMetricsProsp extends OrderMetricsProps {}
