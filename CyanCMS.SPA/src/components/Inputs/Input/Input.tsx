import Form from 'react-bootstrap/Form';

import type { InputProps } from './';

import './Input.scss';

export const Input = ({
    label,
    labelStyle = 'primary',
    errorMessage,
    inputProps,
    labelComponent,
    required,
}: InputProps) => {
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
                {labelComponent ?? label}{' '}
                {required && (
                    <span className="text-danger fw-semibold">(*)</span>
                )}
            </Form.Label>
            <Form.Control
                id={label}
                aria-describedby={label}
                className="juntoz-form__input"
                isInvalid={!!errorMessage}
                {...inputProps}
            />
            {errorMessage && (
                <Form.Control.Feedback type="invalid">
                    {errorMessage}
                </Form.Control.Feedback>
            )}
        </div>
    );
};
