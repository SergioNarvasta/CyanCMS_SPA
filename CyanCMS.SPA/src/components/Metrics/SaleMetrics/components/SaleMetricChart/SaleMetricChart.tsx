import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { useCustomMediaQuery } from '../../../../../hooks';
import { CustomLegendChart } from '../../../components/CustomLegendChart';
import type { SaleMetricsChartData } from './models/ISaleMetricChart';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export const SaleMetricChart = ({
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
                label: 'Ventas Actuales',
                data: currentPeriodData,
                borderColor: '#8038a6',
                backgroundColor: '#8038a6',
                pointBackgroundColor: '#F3CDFF',
                pointRadius: 4.5,
                pointBorderColor: '#F3CDFF',
                borderDash: [7, 7],
                borderWidth: 2.5,
            },
            {
                label: 'Ventas Periodo anterior',
                data: previousPeriodData,
                borderColor: '#c9f25a',
                backgroundColor: '#c9f25a',
                pointBackgroundColor: '#A155B9',
                pointBorderColor: '#A155B9',
                pointRadius: 4.5,
                borderWidth: 2.5,
            },
        ],
    };
    return (
        <>
            <Line
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            callbacks: {
                                title(ttIem) {
                                    return ttIem[0].datasetIndex === 0
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
                    label="Ventas Actuales"
                    backgroundColor="#8038a6"
                />
                <CustomLegendChart
                    label="Ventas Periodo anterior"
                    backgroundColor="#c9f25a"
                />
            </div>
        </>
    );
};
