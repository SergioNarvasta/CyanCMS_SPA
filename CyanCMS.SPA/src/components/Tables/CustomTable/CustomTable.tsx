import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';

import { ArrowLeftIcon } from '../../../assets/common/ArrowLeftIcon';
import { Spinner } from '../../Spinner';
import type { CustomTableProps } from './models';

import './CustomTable.scss';

export const CustomTable = ({
    headers,
    children,
    totalPages,
    currentPage,
    handlePageChange,
    isLoading,
}: CustomTableProps) => {
    return (
        <div className="custom-table">
            {isLoading ? (
                <Spinner />
            ) : (
                <Table responsive>
                    <thead>
                        <tr>
                            {headers.map((header) => (
                                <th key={header}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>{children}</tbody>
                </Table>
            )}
            <div className="d-flex justify-content-end">
                <ReactPaginate
                    previousLabel={<ArrowLeftIcon />}
                    nextLabel={<ArrowLeftIcon />}
                    breakLabel="..."
                    pageCount={totalPages}
                    forcePage={currentPage}
                    onPageChange={handlePageChange}
                    containerClassName="custom-table__pagination px-4 py-1"
                    pageClassName="custom-table__pagination__link"
                    pageLinkClassName="btn"
                    previousClassName="p-2"
                    previousLinkClassName="btn-purple-icon border-0"
                    nextClassName="p-2 rotate-icon"
                    nextLinkClassName="btn-purple-icon border-0"
                    activeClassName="custom-table__pagination__active"
                    activeLinkClassName="text-white"
                    disabledLinkClassName="custom-table__pagination__disabled"
                />
            </div>
        </div>
    );
};
