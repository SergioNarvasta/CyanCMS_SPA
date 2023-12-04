import Form from 'react-bootstrap/Form';

import { type BasicSelectProps, defaultOptions } from './models';

import './BasicSelect.scss';

export const BasicSelect = ({
    options = defaultOptions,
    handleSelect,
    className = null,
    placeholder = null,
}: BasicSelectProps): JSX.Element => {
    return (
        <Form.Select
            className={`category__select ${className ?? ''}`}
            onChange={handleSelect}
        >
            {placeholder && (
                <option key="placeholder" hidden>
                    {placeholder}
                </option>
            )}
            {options.map(({ name, value }) => (
                <option key={value} value={value}>
                    {name}
                </option>
            ))}
        </Form.Select>
    );
};
