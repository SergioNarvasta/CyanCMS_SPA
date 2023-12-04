import { differenceInCalendarDays, format } from 'date-fns';
import { useRef, useState } from 'react';
import type { DateRange, SelectRangeEventHandler } from 'react-day-picker';

import { formatLongLocalizedDate } from '../../../../utilities';

export const useInputCalendar = (defaultDateRange?: DateRange) => {
    const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(
        defaultDateRange ?? undefined,
    );

    const [startDate, setStartDate] = useState<string>(
        defaultDateRange?.from
            ? format(defaultDateRange.from, 'yyyy-MM-dd')
            : '',
    );
    const [endDate, setEndDate] = useState<string>(
        defaultDateRange?.to ? format(defaultDateRange.to, 'yyyy-MM-dd') : '',
    );

    const [differenceDays, setDifferenceDays] = useState<number>(
        defaultDateRange?.to && defaultDateRange?.from
            ? differenceInCalendarDays(
                  defaultDateRange.to,
                  defaultDateRange.from,
              )
            : 0,
    );

    const activeButton = useRef<number>(differenceDays);

    const [currentOption, setCurrentOption] = useState<number>(
        activeButton.current,
    );

    const formatStartDate: string =
        startDate !== ''
            ? formatLongLocalizedDate(new Date(startDate + 'T05:00:00.000Z'))
            : '';
    const formatEndDate: string =
        endDate !== ''
            ? formatLongLocalizedDate(new Date(endDate + 'T05:00:00.000Z'))
            : '';

    const stringDateRange: string =
        formatStartDate && formatEndDate
            ? `${formatStartDate} - ${formatEndDate}`
            : formatStartDate;

    const handleRangeSelect: SelectRangeEventHandler = (
        range: DateRange | undefined,
    ): void => {
        updateRangeSelect(range);
    };

    const updateRangeSelect = (dateRange: DateRange | undefined) => {
        activeButton.current = currentOption;
        setCurrentOption(activeButton.current);
        setSelectedRange(dateRange);

        if (dateRange?.from && dateRange.to) {
            setDifferenceDays(
                differenceInCalendarDays(dateRange.to, dateRange.from),
            );
        }

        if (dateRange?.from) {
            setStartDate(format(dateRange.from, 'yyyy-MM-dd'));
        } else {
            setStartDate('');
        }
        if (dateRange?.to) {
            setEndDate(format(dateRange.to, 'yyyy-MM-dd'));
        } else {
            setEndDate('');
        }
    };

    const resetRangeSelect = () => {
        setCurrentOption(activeButton.current);
        setSelectedRange({
            from: new Date(startDate + 'T05:00:00.000Z'),
            to: new Date(endDate + 'T05:00:00.000Z'),
        });
    };

    return {
        selectedRange,
        setSelectedRange,
        startDate,
        endDate,
        stringDateRange,
        differenceDays,
        currentOption,
        setCurrentOption,
        handleRangeSelect,
        updateRangeSelect,
        resetRangeSelect,
    };
};
