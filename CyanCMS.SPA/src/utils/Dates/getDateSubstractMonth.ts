export const getDateSubstractMonth = ({
    date,
    monthsToSubstract,
}: {
    date: Date;
    monthsToSubstract: number;
}): Date => {
    const newDate = date.setMonth(date.getMonth() - monthsToSubstract);
    return new Date(newDate);
};
