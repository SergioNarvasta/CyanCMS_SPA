export interface IMetricsCard {
    cardTitle: string;
    value: number;
    isNegative: boolean;
    comparisonValue: number;
    currentPeriodValue: number;
    previousPeriodValue: number;
    showToolTip: boolean;
    toolTipMessage?: string;
}
