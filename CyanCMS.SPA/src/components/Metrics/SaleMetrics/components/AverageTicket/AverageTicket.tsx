import { MetricsCard } from '../../../components/MetricsCard/MetricsCards';
import { AverageTicketChart } from '../AverageTicketChart/AverageTicketChart';
import type { IAverageTicket } from './model/IAverageTicket';

export const AverageTicket = ({
    actualPeriodAverageSummary,
    averageSaleMetricBarChartDetails,
}: IAverageTicket) => {
    return (
        <div className="d-flex flex-column gap-2">
            <div className="my-2">
                <MetricsCard
                    cardTitle={actualPeriodAverageSummary.cardTitle}
                    comparisonValue={actualPeriodAverageSummary.comparisonValue}
                    isNegative={actualPeriodAverageSummary.isNegative}
                    value={actualPeriodAverageSummary.value}
                    currentPeriodValue={
                        actualPeriodAverageSummary.currentPeriodValue
                    }
                    previousPeriodValue={
                        actualPeriodAverageSummary.previousPeriodValue
                    }
                    showToolTip={actualPeriodAverageSummary.showToolTip}
                    toolTipMessage={actualPeriodAverageSummary.toolTipMessage}
                />
            </div>
            <AverageTicketChart
                chartData={averageSaleMetricBarChartDetails.chartData}
                previousDates={averageSaleMetricBarChartDetails.previousDates}
            />
        </div>
    );
};
