export interface ModalAlertProps {
    title: string;
    description: React.ReactNode;
    show: boolean;
    onHide: () => void;
    onClick?: () => void;
    textButton?: string;
}
