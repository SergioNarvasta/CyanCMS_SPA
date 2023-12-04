export interface PaginationProps {
    totalPages: number;
    currentPage: number;
    handlePageChange: ({ selected }: { selected: number }) => void;
    pageSize: number;
    setPageSize: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
