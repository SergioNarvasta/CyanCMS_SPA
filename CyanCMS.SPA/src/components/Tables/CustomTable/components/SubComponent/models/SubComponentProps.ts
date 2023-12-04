import type { Row } from '@tanstack/react-table';

export interface SubComponentProps<T> {
    row: Row<T>;
    show: boolean;
    renderSubComponent?: (props: { row: Row<T> }) => React.ReactNode;
}
