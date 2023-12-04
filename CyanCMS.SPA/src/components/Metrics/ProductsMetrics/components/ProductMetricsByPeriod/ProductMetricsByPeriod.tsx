import { Placements } from '../../../../../models/enum/Placement';
import { Image } from '../../../../Images';
import { ToolTip } from '../../../../Tooltip/ToolTip';
import { ProductMetricDetail } from '../ProductMetricDetail/ProductMetricDetail';
import type { IProductMetricsByPeriod } from './models/IProductMetricsByPeriod';

import './ProductMetricsByPeriod.scss';

export const ProductMetricsByPeriod = ({
    periodo,
    periodProductDetails,
    periodDates,
}: IProductMetricsByPeriod) => {
    return (
        <div className="product-metrics-by-period-container">
            <span className="metrics-title">
                <div className="d-flex gap-2 align-items-center">
                    Detalle de unidades más vendidas (Periodo {periodo}){' '}
                    <ToolTip
                        content={periodDates}
                        placement={Placements.RIGHT}
                    />
                </div>
                <div className="table-metrics-header row text-center d-flex align-items-center">
                    <div className="col-2"></div>
                    <div className="col-4"></div>
                    <span className="col-2">Total Vendido</span>
                    <span className="col-2">Stock Actual</span>
                    <span className="col-2">Tiempo promedio de entrega</span>
                </div>
                {periodProductDetails.length === 0 ? (
                    <div className="table-metrics-empty row">
                        <span className="col-6 text-center align-self-center">
                            Tu top 5 de unidades más vendidas se mostrarán aquí
                        </span>
                        <span className="col-6 text-center align-self-center">
                            No hay datos que mostrar
                        </span>
                    </div>
                ) : (
                    <div className="d-flex flex-column gap-3">
                        {periodProductDetails.map((detail, index) => (
                            <div
                                key={detail.sku}
                                className="table-metrics-container m-auto"
                            >
                                <div className="row text-center d-flex flex-row align-items-center">
                                    <div className="col-2 d-flex justify-content-center">
                                        <Image
                                            src={detail.imageURL}
                                            alt="lego"
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </div>
                                    <div className="col-4">
                                        <ProductMetricDetail
                                            index={index}
                                            name={detail.name}
                                            sku={detail.sku}
                                            key={detail.name}
                                            backgroundColor={
                                                periodo === 'actual'
                                                    ? '#C9F25A'
                                                    : '#E9E3FD'
                                            }
                                        />
                                    </div>
                                    <span className="col-2">
                                        {detail.saleQuantity}
                                    </span>
                                    <span
                                        className="col-2"
                                        style={{ color: '#898686' }}
                                    >
                                        {detail.currentStock}
                                    </span>
                                    <span
                                        className="col-2"
                                        style={{ color: '#898686' }}
                                    >
                                        {detail.averageShippingTime === 0
                                            ? 'No hay entregas de este producto'
                                            : `${Math.trunc(
                                                  detail.averageShippingTime /
                                                      24,
                                              )} días ${Math.trunc(
                                                  detail.averageShippingTime %
                                                      24,
                                              )} horas`}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </span>
        </div>
    );
};
