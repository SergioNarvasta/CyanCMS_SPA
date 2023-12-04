import type { DateRange } from 'react-day-picker';

export interface ModalCalendarProps {
    selectedRange: DateRange | undefined;
    setSelectedRange: React.Dispatch<
        React.SetStateAction<DateRange | undefined>
    >;
    updateRangeSelect: (dateRange: DateRange | undefined) => void;
    stringDateRange: string;
    resetRangeSelect: () => void;
    resetPagination?: () => void;
    differenceDays?: number;
    classNames?: string;
    buttonOptions?: CalendarButtonOption[];
    // defaultActiveButton?: CalendarButtonType;
    currentOption: number;
    setCurrentOption: React.Dispatch<React.SetStateAction<number>>;
    defaultActiveButton?: number;
    customSelectedDate?: Date;
    onAccept?: (
        selectedRange: DateRange | undefined,
        currentOption: number,
        diffDays: number,
    ) => void;
    minDate?: Date;
    showOptionsButtons?: boolean;
    disabled?: boolean;
    description?: string;
    requireTwoDates?: boolean;
}

export type CalendarButtonType = 6 | 14 | 29 | 89 | 365 | 'custom';

export interface CalendarButtonOption {
    days: number;
    label: string;
}
