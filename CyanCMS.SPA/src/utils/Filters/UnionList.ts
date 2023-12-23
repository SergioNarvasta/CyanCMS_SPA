export const unionList = (data: Array<string | number>, symbol = ';') => {
    return data.filter((data) => data !== '').join(symbol);
};
