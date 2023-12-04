import type { Row } from '@tanstack/react-table';
export const SubComponent = <T extends object>({
    row,
    show,
    renderSubComponent,
    style,
}: {
    row: Row<T>;
    show: boolean;
    style?: React.CSSProperties;
    renderSubComponent?: (props: { row: Row<T> }) => React.ReactNode;
}) => {
    if (!show) return null;

    return (
        <tr>
            <td colSpan={row.getVisibleCells().length} style={style}>
                {renderSubComponent?.({ row })}
            </td>
        </tr>
    );
};
