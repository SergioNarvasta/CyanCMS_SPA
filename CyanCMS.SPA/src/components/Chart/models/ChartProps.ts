import type { Graph } from '../../../models';

export interface ChartProps {
    data: Graph[];
    handleDateRange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    maxTicksLimit: number;
}
