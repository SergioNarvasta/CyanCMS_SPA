import type { CustomLegendChartProps } from './models';

export const CustomLegendChart = ({
    label,
    backgroundColor,
}: CustomLegendChartProps) => {
    return (
        <div className="d-flex gap-2 align-items-center">
            <div
                style={{
                    width: 50,
                    height: 10,
                    backgroundColor,
                }}
            ></div>
            <span style={{ fontSize: '12px' }}>{label}</span>
        </div>
    );
};
