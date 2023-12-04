import { MetricCardManager } from '../MetricsCardManager/MetricsCardManager';
import { SaleMetricChart } from '../SaleMetricChart/SaleMetricChart';

import './HistoricSales.scss';
import type { IHistoricSales } from './models/IHistoricSales';

export const HistoricSales = ({
    storeMetricCardsDetails,
    storeMetricsChartDetails,
}: IHistoricSales) => {
    return (
        <div className="d-flex flex-column gap-2">
            <MetricCardManager
                promotionsSummary={storeMetricCardsDetails.promotionsSummary}
                saleSummary={storeMetricCardsDetails.saleSummary}
                // specialPricesSummary={
                //     storeMetricCardsDetails.specialPricesSummary
                // }
                subsidySalesSummary={
                    storeMetricCardsDetails.subsidySalesSummary
                }
                totalSalesSummary={storeMetricCardsDetails.totalSalesSummary}
            />
            <SaleMetricChart
                chartData={storeMetricsChartDetails.chartData}
                previousDates={storeMetricsChartDetails.previousDates}
            />
        </div>
    );
};
