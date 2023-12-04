import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { useCustomMediaQuery } from '../../../../../hooks';
import { CustomLegendChart } from '../../../components/CustomLegendChart';
import type { OrderSummmaryByDayPeriods } from '../../models/IOrderMetrics';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const OrderChart = ({
    chartData,
}: {
    chartData: OrderSummmaryByDayPeriods[];
}) => {
    const { isBigScreen } = useCustomMediaQuery();
    const labels = chartData.map((data) => [data.rangeDay]);

    const currentPeriodData = chartData.map((data) => data.current);
    const previousPeriodData = chartData.map((data) => data.previous);

    return (
        <>
            <Bar
                options={{
                    plugins: {
                        legend: {
                            position: 'bottom' as const,
                            display: false,
                            fullSize: true,
                        },
                    },
                    responsive: true,
                    scales: {
                        x: {
                            labels: labels.toString().split(','),
                            grid: {
                                display: false,
                            },
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                            suggestedMin: 0,
                            suggestedMax: 10,
                        },
                    },
                }}
                data={{
                    labels: labels.map(() => ''),
                    // labels: labels.toString().split(','),
                    datasets: [
                        {
                            label: 'Entregados',
                            data: currentPeriodData.map(
                                (i) => i.totalDeliveryByDay,
                            ),
                            backgroundColor: '#8038A6',
                            barPercentage: 0.7,
                            stack: 'Stack 0',
                            xAxisID: 'xAxisID',
                        },
                        {
                            label: 'Cancelaciones',
                            data: currentPeriodData.map(
                                (i) => i.totalCancelledByDay,
                            ),
                            backgroundColor: '#BD97D0',
                            barPercentage: 0.7,
                            stack: 'Stack 0',
                            xAxisID: 'xAxisID',
                        },
                        // {
                        //     label: 'Devoluciones',
                        //     data: [15, 20, 10, 10],
                        //     backgroundColor: '#E9E3FD',
                        //     barPercentage: 0.7,
                        //     borderRadius: 5,
                        //     stack: 'Stack 0',
                        //     xAxisID: 'xAxisID',
                        // },
                        {
                            label: 'Entregados',
                            data: previousPeriodData.map(
                                (i) => i.totalDeliveryByDay,
                            ),
                            backgroundColor: '#8038A6',
                            barPercentage: 0.7,
                            stack: 'Stack 1',
                            xAxisID: 'xAxisID',
                        },
                        {
                            label: 'Cancelaciones',
                            data: previousPeriodData.map(
                                (i) => i.totalCancelledByDay,
                            ),
                            backgroundColor: '#BD97D0',
                            barPercentage: 0.7,
                            stack: 'Stack 1',
                            xAxisID: 'xAxisID',
                        },
                        // {
                        //     label: 'Devoluciones',
                        //     data: [30, 20, 10, 10],
                        //     backgroundColor: '#E9E3FD',
                        //     barPercentage: 0.7,
                        //     borderRadius: 5,
                        //     stack: 'Stack 1',
                        //     xAxisID: 'xAxisID',
                        // },
                    ],
                }}
                style={{
                    maxHeight: isBigScreen ? 450 : 250,
                }}
            />
            <div className="d-flex gap-4 justify-content-center">
                <CustomLegendChart
                    label="Entregadas"
                    backgroundColor="#8038A6"
                />
                <CustomLegendChart
                    label="Cancelaciones"
                    backgroundColor="#BD97D0"
                />
            </div>
        </>
    );
};
