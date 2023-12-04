import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import type { AdminButtonProps } from '../../models';

import './AdminButton.scss';

export const AdminButton = ({ text, to, disabled }: AdminButtonProps) => {
    const navigate = useNavigate();
    return (
        <Button
            variant="gradient"
            className="pt-3 pb-3 px-5 mt-4 mb-4 text-white border border-0 rounded text-start admin-button-panel fs-4"
            onClick={() => {
                navigate(to);
            }}
            disabled={disabled}
        >
            {text}
        </Button>
    );
};
