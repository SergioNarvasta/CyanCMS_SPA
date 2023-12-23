import { removeBlankSpaces } from '../Strings';

export const formatBankInterbankAccountNumber = (value: string): string => {
    const strippedValue = removeBlankSpaces(value);

    // Divide the value into groups according to the format
    const groups: RegExpMatchArray | null = strippedValue.match(
        /(\d{0,3})(\d{0,3})(\d{0,12})(\d{0,2})/,
    );

    // Join the groups with spaces between them
    const formattedValue = `${groups?.[1] ?? ''} ${groups?.[2] ?? ''} ${
        groups?.[3] ?? ''
    } ${groups?.[4] ?? ''}`;

    return formattedValue.trim();
};
