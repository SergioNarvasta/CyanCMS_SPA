import { removeBlankSpaces } from '../Strings';

export const formatBankAccountNumber = (value: string): string => {
    const strippedValue = removeBlankSpaces(value);

    // Divide the value into groups according to the format
    const groups: RegExpMatchArray | null =
        strippedValue.match(/(\d{0,3})(\d{0,17})/);

    // Join the groups with spaces between them
    const formattedValue = `${groups?.[1] ?? ''} ${groups?.[2] ?? ''}`;

    return formattedValue.trim();
};
