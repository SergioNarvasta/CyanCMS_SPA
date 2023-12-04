export interface ModalSingleDateProps {
    selected: Date | undefined;
    setSelected: (date: Date | undefined) => void;
    dateString: string;
    handleDaySelect: (date: Date | undefined) => void;
    classNames?: string;
    customSelectedDate?: Date;
    disabled?: boolean;
}
