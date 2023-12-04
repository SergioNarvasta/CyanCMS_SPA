import type { ModalProps } from 'react-bootstrap';
export interface ModalGeneralProps extends ModalProps {
    show: boolean;
    title: string;
    onHide: () => void;
    children?: React.ReactNode;
    isLoading?: boolean;
}
