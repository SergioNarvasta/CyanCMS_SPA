export const or = (...filters: string[]) => {
    return filters.filter((filter) => filter !== '').join(' or ');
};
