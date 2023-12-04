import Row from 'react-bootstrap/Row';
import {
    MdGpsFixed,
    MdLocalOffer,
    MdOutlineTimer,
    MdWork,
} from 'react-icons/md';

import Sales2Logo from '../../../assets/dashboard/sales-2.svg';

import { CardSale } from '../CardSale';
import { type CardListSaleProps } from './models';

export const CardListSale = ({
    dataOptions,
}: CardListSaleProps): JSX.Element => {
    return (
        <Row
            className="d-flex flex-nowrap justify-content-between overflow-auto w-100 m-0 p-0 gap-2 custom-scrollbar"
            style={{ minHeight: '137px' }}
        >
            <CardSale
                title="Ventas"
                value={dataOptions?.total ?? 0}
                iconComponent={<MdWork size={20} color="#c9f25a" />}
                isCurrency
                showToolTip={true}
                toolTipMessage="Total de ventas del periodo."
            />
            <CardSale
                title="Ticket Promedio"
                value={dataOptions?.ticketPromedio ?? 0}
                icon={Sales2Logo}
                isCurrency
                showToolTip={true}
                toolTipMessage="Ticket promedio del periodo."
            />
            <CardSale
                title="Ventas fulfillment"
                value={0}
                iconComponent={<MdLocalOffer size={20} color="#c9f25a" />}
                isCurrency
                hideValue
                showToolTip={true}
                toolTipMessage="Total de ventas del periodo hechas utilizando fulfillment."
            />
            <CardSale
                title="Órdenes en curso"
                value={dataOptions?.totalPendingOrdes ?? 0}
                iconComponent={<MdOutlineTimer size={20} color="#c9f25a" />}
                isCurrency={false}
                showToolTip={true}
                toolTipMessage="Total de órdenes pendiente de entrega."
            />
            <CardSale
                title="Órdenes entregadas"
                value={dataOptions?.totalOrders ?? 0}
                iconComponent={<MdGpsFixed size={18} color="#c9f25a" />}
                isCurrency={false}
                showToolTip={true}
                toolTipMessage="Total de órdenes entregadas en el periodo."
            />
        </Row>
    );
};
