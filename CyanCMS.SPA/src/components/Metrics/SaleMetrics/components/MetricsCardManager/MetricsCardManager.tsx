import { MetricsCard } from '../../../components/MetricsCard/MetricsCards';
import type { StoreMetricCardsDetails } from './models/IMetricsCardManager';

import './MetricsCardManager.scss';

export const MetricCardManager = ({
    saleSummary,
    totalSalesSummary,
    promotionsSummary,
    // specialPricesSummary,
    subsidySalesSummary,
}: StoreMetricCardsDetails) => {
    return (
        <div className="row metrics-card-manager d-flex flex-row justify-content-lg-center justify-content-xxl-between justify-content-between gap-3 w-100 my-2">
            <MetricsCard {...saleSummary} />
            <MetricsCard {...totalSalesSummary} />
            <MetricsCard {...subsidySalesSummary} />
            <MetricsCard {...promotionsSummary} />
            {/* <MetricsCard {...specialPricesSummary} /> */}
        </div>
    );
};
