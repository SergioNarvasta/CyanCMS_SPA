import ReactPaginate from 'react-paginate';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';

import type { PaginationProps } from './models';

import './Pagination.scss';

export const Pagination = ({
    totalPages,
    currentPage,
    handlePageChange,
    pageSize,
    setPageSize,
}: PaginationProps) => {
    const pageSizesValue = [10, 20, 30];
    return (
        <>
            <ReactPaginate
                previousLabel={<MdArrowLeft size={30} />}
                nextLabel={<MdArrowRight size={30} />}
                breakLabel="..."
                pageCount={totalPages}
                forcePage={totalPages === 0 ? -1 : currentPage}
                onPageChange={handlePageChange}
                containerClassName="custom-table__pagination px-2 py-1"
                pageClassName="custom-table__pagination__link"
                pageLinkClassName="btn"
                previousLinkClassName="custom-table__pagination__link-arrow border-0"
                nextLinkClassName="custom-table__pagination__link-arrow border-0"
                activeClassName="custom-table__pagination__active"
                activeLinkClassName="text-white"
                disabledLinkClassName="custom-table__pagination__disabled"
            />
            <div className="d-flex gap-2">
                <select
                    className="custom-select"
                    value={pageSize}
                    onChange={(e) => setPageSize(e)}
                    disabled={totalPages === 0}
                >
                    {pageSizesValue.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <span>Items por página</span>
            </div>
        </>
    );
};
