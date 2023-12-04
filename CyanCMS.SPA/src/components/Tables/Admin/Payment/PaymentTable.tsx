import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { ArrowLeftIcon } from '../../../../assets/common/ArrowLeftIcon';
import { useAppSelector, useAsync } from '../../../../hooks';
import useFetchAndLoad from '../../../../hooks/useFetchAndLoad';
import { EndpointsName, type Meta } from '../../../../models';
import type { AppStore } from '../../../../redux/store';
import { getAdminSalesInfo } from '../../../../services/Sales/Admin/GetSalesInfo';
import { formatDate, validateStringHasContent } from '../../../../utilities';
import { AdminPaymentTableHeaders } from './enum';
import type {
    AdminPaymentTableData,
    AdminPaymentTableProps,
    AdminPaymentTableWrapper,
} from './models';
import './PaymentTable.scss';

export const AdminPaymentTable = ({
    fromDate,
    toDate,
    amountMinMax,
    merchantIdList,
    subOrderIdList,
}: AdminPaymentTableProps) => {
    const [tableData, setTableData] = useState<AdminPaymentTableData[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [meta, setMeta] = useState<Meta>({} as Meta);
    const { loading, callEndpoint } = useFetchAndLoad();
    const endpoints = useAppSelector((state: AppStore) => state.endpoints);

    const headers = [
        AdminPaymentTableHeaders.DAY_DELIVERED,
        AdminPaymentTableHeaders.ORDER_ID,
        AdminPaymentTableHeaders.SUB_ORDER_ID,
        AdminPaymentTableHeaders.MERCHANT,
        AdminPaymentTableHeaders.RUC,
        AdminPaymentTableHeaders.COMISION,
        AdminPaymentTableHeaders.MONTO_COMISION,
        AdminPaymentTableHeaders.NMV,
    ];

    const fromDateString: string = formatDate(fromDate);
    const toDateString: string = formatDate(toDate);
    const merchantIdListQuery: string = validateStringHasContent(
        merchantIdList.join(','),
    )
        ? merchantIdList.join(',')
        : '';
    const subOrderIdListQuery: string = validateStringHasContent(
        subOrderIdList.join(','),
    )
        ? subOrderIdList.join(',')
        : '';

    const getAdminApiSalesInfo = async () => {
        return callEndpoint(
            await getAdminSalesInfo(
                endpoints[EndpointsName.SALES_API],
                fromDateString,
                toDateString,
                offset !== 0 ? offset : 0,
                merchantIdListQuery,
                subOrderIdListQuery,
                amountMinMax,
            ),
        );
    };

    const handleData = async (data: AdminPaymentTableWrapper) => {
        setTableData(data.adminSalesInfo);
        setMeta(data.meta);
    };

    const handlePageChange = ({ selected }: { selected: number }) => {
        setOffset(selected * meta.limit);
        setCurrentPage(selected);
    };

    useAsync(
        getAdminApiSalesInfo,
        handleData,
        () => {},
        () => {},
        [
            currentPage,
            fromDateString,
            toDateString,
            amountMinMax,
            merchantIdList,
            subOrderIdList,
        ],
    );

    useEffect(() => {
        setCurrentPage(0);
        setOffset(0);
    }, [
        fromDateString,
        toDateString,
        amountMinMax,
        merchantIdList,
        subOrderIdList,
    ]);

    return (
        <div className="admin-payment-table">
            {loading ? (
                <span className="loader"></span>
            ) : (
                <>
                    <Table responsive>
                        <thead>
                            <tr>
                                {headers.map((header) => (
                                    <th key={header}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row) => (
                                <tr
                                    key={row.subOrderId}
                                    className="admin-payment-table-row"
                                >
                                    <td>
                                        {formatDate(new Date(row.dayDelivered))}
                                    </td>
                                    <td>{row.orderId}</td>
                                    <td>{row.subOrderId}</td>
                                    <td>{row.merchantName}</td>
                                    <td>{row.ruc}</td>
                                    <td>
                                        {(row.commissionPercent * 100).toFixed(
                                            0,
                                        )}
                                    </td>
                                    <td>{row.comissionAmount.toFixed(2)}</td>
                                    <td>{row.nmv.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
            <div className="d-flex justify-content-end">
                <ReactPaginate
                    previousLabel={<ArrowLeftIcon />}
                    nextLabel={<ArrowLeftIcon />}
                    breakLabel="..."
                    pageCount={meta.totalPages ?? 1}
                    forcePage={currentPage}
                    onPageChange={handlePageChange}
                    containerClassName="admin-table__pagination px-4 py-1"
                    pageClassName="admin-table__pagination__link"
                    pageLinkClassName="btn"
                    previousClassName="p-2"
                    previousLinkClassName="btn-purple-icon border-0"
                    nextClassName="p-2 rotate-icon"
                    nextLinkClassName="btn-purple-icon border-0"
                    activeClassName="admin-table__pagination__active"
                    activeLinkClassName="text-white"
                    disabledLinkClassName="admin-table__pagination__disabled"
                />
            </div>
        </div>
    );
};
