import type { DateRange, SelectRangeEventHandler } from 'react-day-picker';

export interface InputCalendarProps {
    selectedRange: DateRange | undefined;
    handleRangeSelect: SelectRangeEventHandler;
    stringDateRange: string;
    openCalendar: boolean;
    setOpenCalendar: (data: boolean) => void;
}
