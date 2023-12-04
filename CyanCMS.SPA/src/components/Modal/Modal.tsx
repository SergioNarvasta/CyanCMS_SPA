import Button from 'react-bootstrap/Button';
import ModalBootstrap from 'react-bootstrap/Modal';

import type { ModalProps } from './models';

import './Modal.scss';

export const Modal = ({
    text,
    textButton,
    show,
    onHide,
    onSuccess,
    children,
    showDefaultButton,
    ...rest
}: ModalProps) => {
    const handleButtonClick = () => {
        onHide?.();
        onSuccess?.();
    };

    return (
        <ModalBootstrap
            show={show}
            onHide={onHide}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName="rounded-3 border-0 custom-modal__content"
            dialogClassName="custom-modal__dialog"
            backdrop="static"
            {...rest}
        >
            <ModalBootstrap.Body className="text-center fs-5 custom-modal__body">
                {children ?? (
                    <>
                        <p>{text}</p>
                        <Button
                            variant="purple-gradient"
                            onClick={handleButtonClick}
                            className="w-100 mt-3"
                        >
                            {textButton}
                        </Button>
                    </>
                )}
                {showDefaultButton && (
                    <Button
                        variant="purple-gradient"
                        onClick={handleButtonClick}
                        className="w-100 mt-3"
                    >
                        {textButton}
                    </Button>
                )}
            </ModalBootstrap.Body>
        </ModalBootstrap>
    );
};
