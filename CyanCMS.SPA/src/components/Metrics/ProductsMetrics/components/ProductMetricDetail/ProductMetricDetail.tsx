import type { IProductMetricDetail } from './models/IProductMetricDetail';

import './ProductMetricDetail.scss';

export const ProductMetricDetail = ({
    index,
    name,
    sku,
    backgroundColor,
}: IProductMetricDetail) => {
    const maxWidth: string = (100 - index * 10).toString() + '%';
    return (
        <div className="product-metric-wrapper">
            <div
                className="product-metric-detail-container d-flex flex-column align-items-center gap-1"
                style={{ width: maxWidth, background: backgroundColor }}
            >
                <span className="product-sku text-truncate">{sku}</span>
                <span className="product-name text-truncate">{name}</span>
            </div>
        </div>
    );
};
