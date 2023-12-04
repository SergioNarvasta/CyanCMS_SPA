import type { Row, Table } from '@tanstack/react-table';
import type { TableProps } from 'react-bootstrap';

import type { MetaV2, Pagination } from '../../../../models';

export interface CustomTableProps {
    headers: string[];
    children: React.ReactNode;
    handlePageChange: ({ selected }: { selected: number }) => void;
    currentPage: number;
    totalPages: number;
    isLoading: boolean;
}

export type TableTheme = 'primary' | 'secondary';

export interface CustomTableProps2<T> extends TableProps {
    table: Table<T>;
    handlePageChange?: ({ selected }: { selected: number }) => void;
    handlePageSize?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    currentPage: number;
    paginationServer?: Pagination;
    isLoading: boolean;
    renderSubComponent?: (props: { row: Row<T> }) => React.ReactNode;
    hasPagination?: boolean;
    children?: React.ReactNode;
    metaData?: MetaV2;
    totalData?: string;
    tableTheme?: TableTheme;
}
