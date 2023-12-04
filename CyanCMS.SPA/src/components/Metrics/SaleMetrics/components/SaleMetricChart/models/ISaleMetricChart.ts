export interface SaleMetricChartDetails {
    date: string;
    saleCurrent: number;
    salePrevious: number;
}

export interface SaleMetricsChartData {
    chartData: SaleMetricChartDetails[];
    previousDates: string[];
}
