import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
    type ChartEvent,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { useCustomMediaQuery } from '../../../../../hooks';
import type { SaleMetricsChartData } from '../SaleMetricChart/models/ISaleMetricChart';
import { CustomLegendChart } from '../../../components/CustomLegendChart';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const AverageTicketChart = ({
    chartData,
    previousDates,
}: SaleMetricsChartData) => {
    const { isBigScreen } = useCustomMediaQuery();
    const labels = chartData.map((x) => x.date);
    const currentPeriodData = chartData.map((x) => x.saleCurrent);
    const previousPeriodData = chartData.map((x) => x.salePrevious);

    const refinedData = {
        labels,
        datasets: [
            {
                label: 'Ticket anterior',
                data: previousPeriodData,
                borderColor: '#c9f25a',
                backgroundColor: '#c9f25a',
                borderWidth: 1,
                barPercentage: 0.5,
                borderRadius: 5,
            },
            {
                label: 'Ticket Actual',
                data: currentPeriodData,
                borderColor: '#8038a6',
                backgroundColor: '#8038a6',
                borderWidth: 1,
                barPercentage: 0.5,
                borderRadius: 5,
            },
        ],
    };

    return (
        <>
            <Bar
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom' as const,
                            display: false,
                            fullSize: true,
                            onClick: (e: ChartEvent) =>
                                e.native?.stopPropagation(),
                            labels: {
                                usePointStyle: true,
                                pointStyle: 'rect',
                                padding: 50,
                            },
                        },
                        tooltip: {
                            callbacks: {
                                title(ttIem) {
                                    return ttIem[0].datasetIndex === 1
                                        ? ttIem[0].label
                                        : previousDates[ttIem[0].dataIndex];
                                },
                            },
                        },
                    },
                }}
                data={refinedData}
                style={{
                    maxHeight: isBigScreen ? 450 : 250,
                }}
            />
            <div className="d-flex gap-4 justify-content-center">
                <CustomLegendChart
                    label="Ticket Actual"
                    backgroundColor="#8038a6"
                />
                <CustomLegendChart
                    label="Ticket anterior"
                    backgroundColor="#c9f25a"
                />
            </div>
        </>
    );
};
