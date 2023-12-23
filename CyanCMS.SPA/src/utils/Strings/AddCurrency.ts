export const addCurrency = (value: number | null): string =>
    (value ?? 0).toLocaleString('es-PE', {
        style: 'currency',
        currency: 'PEN',
    });
