import { addDays, differenceInCalendarDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { DayPicker } from 'react-day-picker';
import { MdOutlineToday } from 'react-icons/md';
import { toast } from 'react-toastify';

import { Modal } from '..';
import { getDateSubstractMonth } from '../../../utilities/Dates/getDateSubstractMonth';
import type { CalendarButtonOption, ModalCalendarProps } from './models';

import './ModalCalendarPaymentDetails.scss';

const defaultButtons: CalendarButtonOption[] = [
    {
        label: 'Último mes',
        days: 29,
    },
    {
        label: 'Últimos 3 meses',
        days: 89,
    },
    {
        label: 'Último año',
        days: 365,
    },
    {
        label: 'Rango específico',
        days: 0,
    },
];

export const ModalCalendarPaymentDetails = ({
    stringDateRange,
    selectedRange,
    setSelectedRange,
    updateRangeSelect,
    resetPagination,
    resetRangeSelect,
    differenceDays,
    classNames,
    buttonOptions = defaultButtons,
    customSelectedDate,
    onAccept,
    currentOption,
    setCurrentOption,
    minDate,
    showOptionsButtons = true,
    disabled,
    description,
    requireTwoDates = true,
}: ModalCalendarProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const openModal = () => setShowModal(true);
    const hideModal = () => setShowModal(false);

    const maximumMonth = getDateSubstractMonth({
        date: customSelectedDate ? new Date(customSelectedDate) : new Date(),
        monthsToSubstract: 1,
    });

    const handleButtonOption = (days: number) => {
        setCurrentOption(days);
        if (!days) {
            setSelectedRange(undefined);
        } else {
            setSelectedRange({
                from: addDays(customSelectedDate ?? new Date(), -days),
                to: customSelectedDate ?? new Date(),
            });
        }
    };

    const handleAccept = () => {
        if (selectedRange === undefined) {
            setSelectedRange({
                from: undefined,
                to: undefined,
            });
            updateRangeSelect(undefined);
            hideModal();
            return;
        }
        if (!selectedRange?.from || !selectedRange?.to) {
            return toast.warning(
                'Recuerda que debes seleccionar una fecha inicio y una fecha fin.',
            );
        }

        resetPagination?.();
        updateRangeSelect(selectedRange);

        if (
            onAccept &&
            differenceDays &&
            selectedRange?.from &&
            selectedRange?.to
        ) {
            const diff = differenceInCalendarDays(
                selectedRange.to,
                selectedRange.from,
            );
            onAccept(
                {
                    from: addDays(selectedRange.to, -currentOption * 2),
                    to: selectedRange.from,
                },
                currentOption,
                diff,
            );
        }
        hideModal();
    };

    const handleCancel = () => {
        resetRangeSelect();
        hideModal();
    };

    return (
        <>
            <Button
                onClick={openModal}
                className={`button-calendar ${classNames ?? ''}`}
            >
                <MdOutlineToday className="button-calendar__icon" />
                {stringDateRange || 'Selecciona aquí'}
            </Button>
            <Modal
                show={showModal}
                size="lg"
                text="Selecciona un periodo"
                dialogClassName="modal-calendar__content"
                scrollable
            >
                <div className="d-flex flex-column gap-4 modal-calendar">
                    <div className="text-start modal-calendar__title">
                        <p className="mb-0">Selecciona un periodo</p>
                        {description && (
                            <p className="modal-calendar__description">
                                {description}
                            </p>
                        )}
                    </div>
                    {showOptionsButtons && (
                        <div className="d-flex justify-content-between gap-2 flex-wrap">
                            {buttonOptions.map(({ label, days }) => (
                                <Button
                                    key={label}
                                    variant="white-outline"
                                    className={
                                        currentOption === days
                                            ? 'button-calendar__active'
                                            : ''
                                    }
                                    onClick={() => handleButtonOption(days)}
                                >
                                    {label}
                                </Button>
                            ))}
                        </div>
                    )}
                    <div className="d-flex flex-column gap-2 justify-content-end">
                        <DayPicker
                            mode="range"
                            locale={es}
                            numberOfMonths={2}
                            weekStartsOn={0}
                            defaultMonth={maximumMonth}
                            fromDate={minDate}
                            toDate={customSelectedDate ?? new Date()}
                            selected={selectedRange}
                            onSelect={setSelectedRange}
                            showOutsideDays
                            disabled={disabled ?? currentOption !== 0}
                            styles={{
                                caption_label: {
                                    fontSize: '1.375rem',
                                },
                                head: {
                                    fontSize: '.75rem',
                                },
                                nav_icon: {
                                    color: '#8038A6',
                                },
                                month: {
                                    boxShadow:
                                        '0px 4px 4px rgba(0, 0, 0, 0.3), 0px -1px 3px rgba(0, 0, 0, 0.3)',
                                    borderRadius: '10px',
                                    padding: 15,
                                },
                                day: {
                                    fontSize: '.75rem',
                                    padding: '8px',
                                },
                                cell: {
                                    width: '50px',
                                    height: '40px',
                                    padding: '8px 0px',
                                },
                                months: {
                                    justifyContent: 'center',
                                    gap: '2.1875rem',
                                },
                            }}
                            modifiersStyles={{
                                selected: {
                                    color: '#1C1B1F',
                                    backgroundColor: '#E8DEF8',
                                },
                                range_start: {
                                    backgroundColor: '#6750A4',
                                    color: '#fff',
                                },
                                range_end: {
                                    backgroundColor: '#6750A4',
                                    color: '#fff',
                                },
                            }}
                        />
                    </div>
                    <div className="d-flex justify-content-end gap-3">
                        <Button variant="green-outline" onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button variant="green" onClick={handleAccept}>
                            Aceptar
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
