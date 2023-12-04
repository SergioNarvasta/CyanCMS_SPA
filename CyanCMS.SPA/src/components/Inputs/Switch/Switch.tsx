import Form from 'react-bootstrap/Form';
import { useController } from 'react-hook-form';

import type { SwitchProps } from './models';

import './Switch.scss';

export const Switch = <T extends object>({
    label,
    name,
    control,
}: SwitchProps<T>) => {
    const { field } = useController({
        name,
        control,
    });
    return (
        <Form.Check
            id={`custom-switch-${name}`}
            type="switch"
            className="custom-switch"
        >
            <Form.Check.Input type="checkbox" {...field} />
            <Form.Check.Label className="d-block text-truncate text-start">
                {label}
            </Form.Check.Label>
        </Form.Check>
    );
};
