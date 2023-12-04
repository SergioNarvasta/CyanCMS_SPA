import { addDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { DayPicker } from 'react-day-picker';
import { MdOutlineToday } from 'react-icons/md';

import { Modal } from '..';
import type { ModalSingleDateProps } from './models';

export const ModalSingleDate = ({
    selected,
    setSelected,
    dateString,
    classNames,
    handleDaySelect,
    disabled,
}: ModalSingleDateProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const openModal = () => setShowModal(true);
    const hideModal = () => setShowModal(false);

    const prevDate = useRef<Date | undefined>(selected);

    const handleAccept = () => {
        handleDaySelect(selected);
        prevDate.current = selected;
        hideModal();
    };

    const handleCancel = () => {
        handleDaySelect(prevDate.current);
        setSelected(prevDate.current);
        hideModal();
    };

    return (
        <>
            <Button
                onClick={openModal}
                className={`button-calendar border-0 fs-6 ${classNames ?? ''}`}
                disabled={disabled}
            >
                <MdOutlineToday size={20} className="text-purple" />
                {dateString || 'Coloca la fecha de inicio de campaña'}
            </Button>
            <Modal
                show={showModal}
                size="lg"
                text="Selecciona un periodo"
                dialogClassName="modal-calendar__content"
                scrollable
            >
                <div className="d-flex flex-column gap-3">
                    <p className="fs-6">Coloca la fecha de inicio de campaña</p>
                    <div className="d-flex flex-column gap-2 justify-content-end">
                        <DayPicker
                            mode="single"
                            locale={es}
                            numberOfMonths={1}
                            weekStartsOn={0}
                            selected={selected}
                            onSelect={setSelected}
                            fromDate={addDays(new Date(), 16)}
                            showOutsideDays
                            styles={{
                                caption_label: {
                                    fontSize: '1.375rem',
                                    fontWeight: 'bold',
                                },
                                head: {
                                    fontSize: '.875rem',
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
                                cell: {
                                    fontSize: '.875rem',
                                },
                                months: {
                                    justifyContent: 'center',
                                    gap: '2.1875rem',
                                },
                                table: {
                                    margin: '0px auto',
                                },
                            }}
                            modifiersStyles={{
                                selected: {
                                    color: '#FFF',
                                    backgroundColor: '#8038A6',
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
