import { es } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';

import { DropdownCalendar } from './components';
import type { InputCalendarProps } from './models';

import 'react-day-picker/dist/style.css';
import './InputCalendar.scss';
import { getDateSubstractMonth } from '../../../utilities/Dates/getDateSubstractMonth';

export const InputCalendar = ({
    selectedRange,
    handleRangeSelect,
    stringDateRange,
    openCalendar,
    setOpenCalendar,
}: InputCalendarProps) => {
    const maximumMonth = getDateSubstractMonth({
        date: new Date(),
        monthsToSubstract: -1,
    });
    return (
        <div style={{ width: 566 }}>
            <DropdownCalendar
                text={stringDateRange || 'Selecciona aquí'}
                showContent={openCalendar}
                setShowContent={setOpenCalendar}
            >
                <DayPicker
                    mode="range"
                    locale={es}
                    numberOfMonths={2}
                    weekStartsOn={0}
                    defaultMonth={selectedRange?.to ?? maximumMonth}
                    toDate={new Date()}
                    selected={selectedRange}
                    onSelect={handleRangeSelect}
                    showOutsideDays
                    styles={{
                        month: {
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            borderRadius: '10px',
                            padding: 15,
                        },
                    }}
                    modifiersStyles={{
                        selected: {
                            color: '#1C1B1F',
                            backgroundColor: '#E8DEF8',
                        },
                        range_start: {
                            backgroundColor: '#908E96',
                            color: '#fff',
                        },
                        range_end: {
                            backgroundColor: '#908E96',
                            color: '#fff',
                        },
                    }}
                />
            </DropdownCalendar>
        </div>
    );
};
