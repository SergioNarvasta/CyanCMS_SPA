export const getPriorDate = (
    previousDays: number,
    currentDate?: Date,
): Date => {
    const today = currentDate ? new Date(currentDate) : new Date();
    const priorDate = new Date(today.setDate(today.getDate() - previousDays));
    return priorDate;
};
