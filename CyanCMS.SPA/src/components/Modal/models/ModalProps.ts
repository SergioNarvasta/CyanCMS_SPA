import type { ModalProps as ModalPropsBootstrap } from 'react-bootstrap';

export interface ModalProps extends ModalPropsBootstrap {
    text?: string;
    textButton?: string;
    show: boolean;
    onHide?: () => void;
    onSuccess?: () => void;
    children?: React.ReactNode;
    showDefaultButton?: boolean;
}

export type ModalHandleType = 'Accept' | 'Cancel';
