import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatDateForGraph = (date: Date): string =>
    date
        .toLocaleDateString(undefined, {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
        })
        .replace(/\//g, '-');

export const formatDateForTable = (date: Date): string =>
    date.toLocaleDateString(undefined, {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
    });

export const formatDate = (date: Date | undefined): string => {
    if (date === undefined) {
        throw new Error('La fecha es undefined.');
    }
    return date.toLocaleDateString('en-ZA');
};

export const formatLongLocalizedDate = (date: Date): string => {
    return format(date, 'PP', { locale: es }); // 3 feb 2023
};

export const replaceDateSlash = (stringDate: string): string => {
    return stringDate.replace(/\//g, '-');
};
