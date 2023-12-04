export interface ModalAlertProps {
    title: string;
    description: React.ReactNode;
    show: boolean;
    onHide: () => void;
    onClick: () => void;
    textButtonAccept?: string;
    textButtonCancel?: string;
    setModalView: () => void;
}
