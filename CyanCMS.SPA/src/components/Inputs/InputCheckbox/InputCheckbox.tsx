import { forwardRef } from 'react';
import Form from 'react-bootstrap/Form';

import type { InputCheckboxProps } from './models';

import './InputChecbox.scss';

export const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxProps>(
    ({ id, label, errorMessage, ...rest }, ref) => {
        return (
            <Form.Check type="checkbox" id={id}>
                <Form.Check.Input
                    type="checkbox"
                    isInvalid={!!errorMessage}
                    {...rest}
                    ref={ref}
                />
                {label && <Form.Check.Label>{label}</Form.Check.Label>}
                {errorMessage && (
                    <Form.Control.Feedback type="invalid">
                        {errorMessage}
                    </Form.Control.Feedback>
                )}
            </Form.Check>
        );
    },
);
