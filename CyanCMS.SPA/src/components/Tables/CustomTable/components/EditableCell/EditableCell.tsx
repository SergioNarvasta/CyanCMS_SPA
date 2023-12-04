import type { CellContext, RowData } from '@tanstack/react-table';
import { useEffect, useState } from 'react';

declare module '@tanstack/react-table' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface TableMetaData<TData extends RowData> {
        updateData: (
            rowIndex: number,
            columnId: string,
            value: unknown,
        ) => void;
    }
}

export const EditableCell = <T extends object>({
    getValue,
    row: { index, parentId },
    column: { id },
    table,
}: CellContext<T, number>) => {
    const initialValue: number = getValue() ?? '';
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState<number | string>(initialValue);

    const onBlur = () => {
        if (parentId) {
            table.options.meta?.updateData(+parentId, id, value);
        } else {
            table.options.meta?.updateData(index, id, value);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue: string = e.target.value.replace(/[^0-9.]/g, '');

        setValue(numericValue);
    };

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return (
        <input
            value={value}
            onChange={handleInputChange}
            onBlur={onBlur}
            type="number"
            className="juntoz-form__input--shadow"
        />
    );
};
