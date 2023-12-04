import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdCancel } from 'react-icons/md';

import { Spinner } from '../../Spinner';
import type { ModalGeneralProps } from './models';

export const ModalGeneral = ({
    title,
    show,
    onHide,
    children,
    isLoading,
    ...props
}: ModalGeneralProps) => {
    return (
        <Modal
            className="text-center"
            backdrop="static"
            centered
            show={show}
            onHide={onHide}
            {...props}
        >
            <Modal.Header className="border-0 position-relative">
                <span className="w-100 text-purple fw-bold px-4">{title}</span>
                <Button
                    variant="purple-icon"
                    className="position-absolute top-0 end-0 me-3 mt-3 border-0 rounded-circle border-0 p-0 m-0"
                    onClick={onHide}
                    disabled={isLoading}
                    style={{ minWidth: 'auto' }}
                >
                    <MdCancel />
                </Button>
            </Modal.Header>
            <Modal.Body className="p-4 pt-0">
                {isLoading ? <Spinner /> : children}
            </Modal.Body>
        </Modal>
    );
};
