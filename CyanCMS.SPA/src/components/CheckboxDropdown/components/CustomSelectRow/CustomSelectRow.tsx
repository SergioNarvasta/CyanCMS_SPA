import { useRef } from 'react';
import { Dropdown } from 'react-bootstrap';
import type { ICustomSelectRow } from '../../models/ICustomSelectRow';

export const CustomSelectRow = ({
    row,
    handleCheckBox,
    checkBoxList,
    value,
}: ICustomSelectRow) => {
    const inputRef = useRef<HTMLElement>(null);
    return (
        <div
            className="d-flex align-items-center"
            key={row}
            style={{ maxWidth: '200px' }}
        >
            <Dropdown.Item
                eventKey={row}
                className="d-flex gap-2"
                key={row}
                onClick={() => {
                    inputRef?.current?.click();
                }}
            >
                <input
                    name="my-checkbox"
                    id="my-checkbox"
                    type="checkbox"
                    onChange={handleCheckBox}
                    value={value}
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    checked={checkBoxList.includes(value)}
                    key={value + checkBoxList.includes(value).toString()}
                />
                <span className="text-truncate">{row}</span>
            </Dropdown.Item>
        </div>
    );
};
