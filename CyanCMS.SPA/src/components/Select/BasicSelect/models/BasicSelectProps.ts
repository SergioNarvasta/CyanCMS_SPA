export interface ISelectOption {
    value: any;
    name: string;
}

export interface BasicSelectProps {
    options: ISelectOption[];
    currentOption?: ISelectOption;
    handleSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string | null;
    placeholder?: string | null;
}

export const defaultOptions: ISelectOption[] = [
    {
        name: 'Última semana',
        value: 6,
    },
    {
        name: 'Últimos 15 días',
        value: 14,
    },
    {
        name: 'Últimos 30 días',
        value: 29,
    },
    {
        name: 'Últimos 90 días',
        value: 89,
    },
];
