import { Modal } from '../Modal';
import type { ModalAlertProps } from './models';

import './ModalAlert.scss';

export const ModalAlert = ({
    title,
    description,
    show,
    onHide,
    onClick,
    textButton,
}: ModalAlertProps) => {
    return (
        <Modal show={show} className="p-0" onHide={onHide} backdrop={undefined}>
            <div>
                <p className="custom-modal-alert__title">{title}</p>
                <p className="custom-modal-alert__description">{description}</p>
                <button
                    className={`btn btn-${
                        textButton ? 'green-outline' : 'purple'
                    }`}
                    onClick={onClick ?? onHide}
                >
                    {textButton ?? 'Aceptar'}
                </button>
            </div>
        </Modal>
    );
};
