export const addZeroes = (num: number) =>
    num.toLocaleString('en', {
        useGrouping: false,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
