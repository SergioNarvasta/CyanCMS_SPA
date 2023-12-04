import { CardContainer } from '../../../CardContainer';
import type { TableItemsProps } from './models';

import DefaultImage from '../../../../../assets/no-image.png';

import './CategoryTableItem.scss';
import { validateStringHasContent } from '../../../../../utilities';

export const CategoryTableItem = ({
    product,
    index,
}: TableItemsProps): JSX.Element => {
    return (
        <tr className="d-flex align-items-center">
            <td className="fw-bold" style={{ width: '25px' }}>
                {index}
            </td>
            <td colSpan={2} className="d-flex w-100 gap-2 align-center">
                <CardContainer extraClass="m-0 p-2">
                    <img
                        src={
                            product.imageUrl.concat('?h=40&w=40') ||
                            DefaultImage
                        }
                        alt={product.productName}
                        loading="lazy"
                        style={{
                            width: '30px',
                            height: '30px',
                            objectFit: 'contain',
                        }}
                    />
                </CardContainer>
                <div className="d-flex flex-column">
                    <span
                        className="d-inline-block table-item__name text-truncate"
                        style={{ maxWidth: 120 }}
                    >
                        {validateStringHasContent(product?.productName)
                            ? product.productName
                            : 'No product Name'}
                    </span>
                    <span className="table-item__sku">
                        SKU:{' '}
                        {validateStringHasContent(product?.sku)
                            ? product.sku
                            : 'No SKU'}
                    </span>
                </div>
            </td>
            <td className="text-end">{product.soldQuantity}</td>
        </tr>
    );
};
