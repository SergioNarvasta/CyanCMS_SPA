import Form from 'react-bootstrap/Form';

import type { SelectProps } from './models';

export const Select = ({
    label,
    selectProps,
    options,
    errorMessage,
    labelStyle,
}: SelectProps) => {
    return (
        <div className="mb-3">
            <Form.Label
                htmlFor={label}
                className={`${
                    labelStyle === 'primary'
                        ? 'juntoz-form__label'
                        : 'juntoz-form__label-secondary'
                }`}
            >
                {label}
            </Form.Label>
            <Form.Select
                id={label}
                aria-describedby={label}
                className="register-form__input"
                isInvalid={!!errorMessage}
                defaultValue=""
                {...selectProps}
            >
                <option value="" disabled>
                    Selecciona una opción
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </Form.Select>
            {errorMessage && (
                <Form.Control.Feedback type="invalid">
                    {errorMessage}
                </Form.Control.Feedback>
            )}
        </div>
    );
};
