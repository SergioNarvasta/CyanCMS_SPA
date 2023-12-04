import Form from 'react-bootstrap/Form';

import type { SwitchStatusProps } from './models';

import './SwitchStatus.scss';

export const SwitchStatus = ({
    checked,
    onChange,
    isDisabled,
    style,
}: SwitchStatusProps) => {
    return (
        <Form.Check type="switch">
            <Form.Check.Input
                type="checkbox"
                className="switch-status"
                checked={checked}
                onChange={onChange}
                disabled={isDisabled}
                style={style}
            />
        </Form.Check>
    );
};
