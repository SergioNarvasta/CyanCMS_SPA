import Form from 'react-bootstrap/Form';

import type { BasicInputProps } from './models';

export const BasicInput = ({ autoFocus, ...props }: BasicInputProps) => {
    return <Form.Control {...props} autoFocus />;
};
