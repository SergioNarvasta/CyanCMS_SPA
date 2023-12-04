import { MetricsCard } from '../../../components/MetricsCard/MetricsCards';
import type { OrderMetricsCardDetails } from '../../models/OrderMetricsCardDetails';

export const OrderMetricsCardManager = ({
    cancelled,
    delivered,
    outOfTime,
}: OrderMetricsCardDetails) => {
    return (
        <div className="row metrics-card-manager d-flex flex-row  gap-5 w-100 my-2">
            <MetricsCard {...delivered} />
            <MetricsCard {...cancelled} />
            <MetricsCard {...outOfTime} />
        </div>
    );
};
