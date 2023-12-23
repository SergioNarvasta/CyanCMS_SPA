export const and = (...filters: string[]) => {
    return filters.filter((filter) => filter !== '').join(' and ');
};
