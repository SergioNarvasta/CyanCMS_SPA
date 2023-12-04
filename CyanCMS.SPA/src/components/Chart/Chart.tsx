/* eslint-disable @typescript-eslint/indent */
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    type ChartTypeRegistry,
    type PluginOptionsByType,
    type ScriptableContext,
} from 'chart.js';
import type { _DeepPartialObject } from 'chart.js/dist/types/utils';
import Row from 'react-bootstrap/Row';
import { Line } from 'react-chartjs-2';

import { formatCurrency } from '../../utilities';
import { CardContainer } from '../Cards';
import { BasicSelect, defaultOptions } from '../Select';
import type { ChartProps } from './models';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
);

const getOrCreateTooltip = (chart: ChartJS<keyof ChartTypeRegistry>) => {
    let tooltipEl: HTMLDivElement | null | undefined =
        chart.canvas.parentNode?.querySelector('#tooltip-chart');

    if (tooltipEl === null) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'tooltip-chart';
        tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
        tooltipEl.style.borderRadius = '3px';
        tooltipEl.style.color = 'white';
        tooltipEl.style.opacity = '1';
        tooltipEl.style.pointerEvents = 'none';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.transform = 'translate(-50%, 0)';
        tooltipEl.style.transition = 'all .4s ease';
        tooltipEl.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
        tooltipEl.style.borderRadius = '8px';
        tooltipEl.style.minWidth = '126px';
        tooltipEl.style.maxHeight = '150px';
        tooltipEl.style.background =
            'linear-gradient(89.8deg, #C9F25A 30.85%, #C7E475 60.18%)';

        const table = document.createElement('div');
        table.id = 'div-tooltip-container';
        table.style.width = '100%';
        table.style.display = 'flex';
        table.style.gap = '.25rem';
        table.style.flexDirection = 'column';

        tooltipEl.appendChild(table);
        chart.canvas.parentNode?.appendChild(tooltipEl);
    }

    return tooltipEl;
};

const plugins: _DeepPartialObject<PluginOptionsByType<'line'>> = {
    legend: {
        display: false,
    },
    filler: {
        propagate: false,
    },
    tooltip: {
        enabled: false,
        position: 'nearest',
        external: (context) => {
            const { chart, tooltip } = context;
            const daylySubOrders: number = (
                tooltip.dataPoints[0].dataset.data[
                    tooltip.dataPoints[0].dataIndex
                ] as any
            ).subOrders;
            const tooltipEl = getOrCreateTooltip(chart);

            if (tooltipEl !== undefined && tooltip.opacity === 0) {
                tooltipEl.style.opacity = '0';
                return;
            }

            if (tooltip.body !== null) {
                const bodyLines = tooltip.body.map((b) => b.lines);

                const tableTitle = document.createElement('span');
                tableTitle.style.lineHeight = '.75rem';
                tableTitle.style.fontSize = '.7rem';

                const tableHead = document.createElement('span');
                tableHead.style.lineHeight = '.75rem';

                const tableBody = document.createElement('span');
                tableBody.style.fontSize = '0.7rem';
                tableBody.style.color = '#858688';
                tableBody.style.lineHeight = '.75rem';

                const textDate = document.createTextNode(tooltip.title[0]);
                tableTitle.appendChild(textDate);

                bodyLines.forEach((body, i) => {
                    const text1 = document.createTextNode(`S/ ${body[0]}`);
                    tableHead.appendChild(text1);

                    const text = document.createTextNode(
                        `Órdenes: ${daylySubOrders}`,
                    );
                    tableBody.appendChild(text);
                });

                const tableRoot = tooltipEl?.querySelector(
                    '#div-tooltip-container',
                );
                tableRoot?.replaceChildren();

                tableRoot?.appendChild(tableTitle);
                tableRoot?.appendChild(tableHead);
                tableRoot?.appendChild(tableBody);
            }

            const { offsetLeft: positionX, offsetTop: positionY } =
                chart.canvas;

            if (tooltipEl !== undefined) {
                tooltipEl.style.color = '#8038A6';
                tooltipEl.style.opacity = '1';
                tooltipEl.style.fontWeight = 'bold';
                tooltipEl.style.textAlign = 'center';
                tooltipEl.style.left = `${positionX + tooltip.caretX}px`;
                tooltipEl.style.top = `${positionY + tooltip.caretY}px`;
                tooltipEl.style.padding = `${
                    tooltip.options.padding as string
                }px ${tooltip.options.padding as string}px`;
            }
        },
    },
};

export const Chart = ({
    data,
    handleDateRange,
    maxTicksLimit,
}: ChartProps): JSX.Element => {
    return (
        <Row className="m-0">
            <CardContainer extraClass="position-relative">
                <div className="d-flex justify-content-end">
                    <BasicSelect
                        options={defaultOptions}
                        handleSelect={handleDateRange}
                    />
                </div>
                <Line
                    options={{
                        interaction: {
                            mode: 'index',
                            intersect: false,
                        },
                        responsive: true,
                        plugins,
                        parsing: {
                            xAxisKey: 'date',
                            yAxisKey: 'total',
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    align: 'inner',
                                    autoSkip: true,
                                    maxRotation: 0,
                                    maxTicksLimit,
                                },
                            },
                            y: {
                                suggestedMin: 0,
                                suggestedMax: 100,
                                grid: {
                                    color: '#ECECEC',
                                },
                                border: {
                                    dash: [12, 4],
                                },
                                ticks: {
                                    padding: 10,
                                    callback: (value, index) =>
                                        index % 2 === 0
                                            ? formatCurrency(
                                                  value as number,
                                                  false,
                                              )
                                            : '',
                                },
                                min: 0,
                            },
                        },
                        elements: {
                            line: {
                                tension: 0.35,
                            },
                        },
                    }}
                    data={{
                        datasets: [
                            {
                                fill: 'start',
                                data,
                                backgroundColor: (
                                    context: ScriptableContext<'line'>,
                                ) => {
                                    const ctx = context.chart.ctx;
                                    const gradient = ctx.createLinearGradient(
                                        0,
                                        0,
                                        0,
                                        400,
                                    );
                                    gradient.addColorStop(
                                        0,
                                        'rgba(128,56,166,0.35)',
                                    );
                                    gradient.addColorStop(
                                        1,
                                        'rgba(128,56,166,0)',
                                    );
                                    return gradient;
                                },
                                borderColor: 'rgba(128, 56, 166, 1)',
                                borderWidth: 1.5,
                                pointRadius: 2,
                            },
                        ],
                    }}
                    style={{ maxHeight: 218 }}
                />
            </CardContainer>
        </Row>
    );
};
