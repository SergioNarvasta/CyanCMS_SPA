import type { SelectOption } from '@/components';

interface GenerateSelectOptionsParams<T> {
    data: T[];
    labelKey: keyof T;
    valueKey: keyof T;
}

export function generateSelectOptions<T>({
    data,
    labelKey,
    valueKey,
}: GenerateSelectOptionsParams<T>): SelectOption[] {
    return data.map((item) => ({
        label: String(item[labelKey]),
        value: Number(item[valueKey]),
    }));
}

export function generateSelectOptionsValueString<T>({
    data,
    labelKey,
    valueKey,
}: GenerateSelectOptionsParams<T>): SelectOption[] {
    return data.map((item) => ({
        label: String(item[labelKey]),
        value: String(item[valueKey]),
    }));
}
