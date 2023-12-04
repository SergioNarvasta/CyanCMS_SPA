import Form from 'react-bootstrap/Form';
import InputGroupBootstrap from 'react-bootstrap/InputGroup';

import type { InputProps } from '../Input';

export const InputGroup = ({
    label,
    labelStyle = 'primary',
    inputProps,
    errorMessage,
    addOn,
    required,
}: InputProps) => {
    return (
        <>
            <Form.Label
                htmlFor={label}
                className={`"${
                    labelStyle === 'primary'
                        ? 'juntoz-form__label'
                        : 'juntoz-form__label-secondary'
                }"`}
            >
                {label}{' '}
                {required && (
                    <span className="text-danger fw-semibold">(*)</span>
                )}
            </Form.Label>
            <InputGroupBootstrap className="d-flex flex-column">
                <div className="juntoz-form__input d-flex w-100 gap-2">
                    <InputGroupBootstrap.Text id="basic-addon1">
                        {addOn}
                    </InputGroupBootstrap.Text>
                    <Form.Control
                        id={label}
                        aria-label={label}
                        aria-describedby="basic-addon1"
                        isInvalid={!!errorMessage}
                        {...inputProps}
                    />
                </div>
            </InputGroupBootstrap>
            {errorMessage && (
                <Form.Control.Feedback type="invalid" className="d-flex">
                    {errorMessage}
                </Form.Control.Feedback>
            )}
        </>
    );
};
