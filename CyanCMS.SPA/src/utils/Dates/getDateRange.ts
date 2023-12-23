import { formatDate } from './formatDate';

export function getDateRange(
    startDate: Date,
    endDate = new Date(),
    steps = 1,
): string[] {
    const dateArray: Date[] = [];
    const currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
        dateArray.push(new Date(currentDate));
        currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }

    return dateArray.map(formatDate);
}
