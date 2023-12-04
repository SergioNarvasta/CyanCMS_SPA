import Table from 'react-bootstrap/Table';

import { CategoryTableItem } from '../CategoryTableItem';
import { type CategoryTableProps } from './models';

import './CategoryTable.scss';

export const CategoryTable = ({
    products,
}: CategoryTableProps): JSX.Element => {
    return (
        <Table
            borderless
            className="align-middle mt-2 d-flex flex-column card-table"
        >
            <thead>
                <tr className="d-flex">
                    <th style={{ width: '25px' }}></th>
                    <th className="table__title px-0" style={{ flex: 1 }}>
                        Nombre
                    </th>
                    <th
                        className="table__title px-0"
                        style={{ width: '110px', textAlign: 'center' }}
                    >
                        Cantidad
                    </th>
                </tr>
            </thead>
            <tbody className="custom-scrollbar">
                {!!products.length &&
                    products.map((p, index) => (
                        <CategoryTableItem
                            key={p.sku.concat(p.soldQuantity)}
                            product={p}
                            index={index + 1}
                        />
                    ))}
            </tbody>
        </Table>
    );
};
