export const formatCurrency = (n: number, addCurrency = true) => {
    const newValue = Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1,
    }).format(n);
    if (!addCurrency ?? false) return newValue;
    return `S/ ${newValue}`;
};
