import { Modal } from '../Modal';
import type { ModalAlertProps } from './models';

import './ModalAlertDocumentsSetting.scss';

export const ModalAlertDocumentsSetting = ({
    title,
    description,
    show,
    onHide,
    onClick,
    textButtonAccept,
    textButtonCancel,
    setModalView,
}: ModalAlertProps) => {
    const onClickAccept = () => {
        onClick();
        setModalView();
    };
    return (
        <Modal show={show} className="p-0" onHide={onHide} backdrop={undefined}>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <p className="custom-modal-alert__title">{title}</p>
                <p className="custom-modal-alert__description">{description}</p>
                <div className="d-flex gap-2 justify-content-between align-items-center w-50 ">
                    <button
                        className={`btn btn-${
                            textButtonCancel ? 'green-outline' : 'purple'
                        }`}
                        onClick={() => {
                            setModalView();
                        }}
                    >
                        {textButtonCancel ?? 'Cancelar'}
                    </button>
                    <button
                        className={`btn btn-${
                            textButtonAccept ? 'green' : 'purple'
                        }`}
                        onClick={onClickAccept}
                    >
                        {textButtonAccept ?? 'Aceptar'}
                    </button>
                </div>
            </div>
        </Modal>
    );
};
