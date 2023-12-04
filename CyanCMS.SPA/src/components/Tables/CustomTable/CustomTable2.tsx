import { flexRender } from '@tanstack/react-table';
import { Fragment } from 'react';
import Table from 'react-bootstrap/Table';

import { Spinner } from '../../Spinner';
import { Pagination, SubComponent } from './components';
import type { CustomTableProps2 } from './models';

import './CustomTable2.scss';

export const CustomTable2 = <T extends object>({
    table,
    currentPage,
    handlePageChange,
    handlePageSize,
    isLoading,
    renderSubComponent,
    hasPagination = true,
    paginationServer,
    children,
    metaData,
    totalData,
    tableTheme = 'primary',
    ...props
}: CustomTableProps2<T>) => {
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center">
                <Spinner />
            </div>
        );
    }

    return (
        <>
            <Table
                className={
                    tableTheme === 'primary'
                        ? 'custom-table-2'
                        : 'custom-table-2-secondary'
                }
                responsive
                borderless
                hover
                {...props}
            >
                <thead className="align-middle text-center">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    style={{
                                        width:
                                            header.getSize() !== 150
                                                ? header.getSize()
                                                : undefined,
                                    }}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext(),
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="align-middle text-center">
                    {children ??
                        table.getRowModel().rows.map((row) => (
                            <Fragment key={row.id}>
                                <tr>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </td>
                                    ))}
                                </tr>
                                {row.getIsExpanded() && (
                                    <SubComponent
                                        show={row.getIsExpanded()}
                                        renderSubComponent={renderSubComponent}
                                        row={row}
                                    />
                                )}
                            </Fragment>
                        ))}
                </tbody>
            </Table>
            {hasPagination && (
                <div className="d-flex justify-content-between pagination-container mb-2">
                    <div className="d-flex gap-3 align-items-center">
                        <Pagination
                            currentPage={
                                paginationServer?.currentPage ?? currentPage
                            }
                            totalPages={
                                paginationServer?.pageCount ??
                                table.getPageCount()
                            }
                            handlePageChange={({ selected }) =>
                                handlePageChange?.({ selected })
                            }
                            pageSize={
                                paginationServer?.pageSize ??
                                table.getState().pagination.pageSize
                            }
                            setPageSize={(e) => handlePageSize?.(e)}
                        />
                    </div>
                    {totalData ??
                        (metaData && (
                            <div className="pe-5">
                                {(metaData.offSet ??
                                    table.getState().pagination.pageIndex) +
                                    1}{' '}
                                -{' '}
                                {(metaData.offSet ??
                                    table.getState().pagination.pageIndex) +
                                    table.getCoreRowModel().rows.length}{' '}
                                de {metaData?.totalData}
                            </div>
                        ))}
                </div>
            )}
        </>
    );
};
