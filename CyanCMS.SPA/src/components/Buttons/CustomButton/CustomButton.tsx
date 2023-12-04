import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import type { CustomButtonProps } from './models';

export const CustomButton = ({
    isLoading,
    text,
    ...buttonProps
}: CustomButtonProps) => {
    return (
        <Button
            variant="purple"
            style={{
                minWidth: 150,
            }}
            disabled={isLoading}
            {...buttonProps}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />{' '}
                    Cargando...
                </>
            ) : (
                text
            )}
        </Button>
    );
};
