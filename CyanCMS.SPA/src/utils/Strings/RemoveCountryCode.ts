import { peruPhoneNumberCodeRegex } from '@/utilities/Regex';

export const removeCountryCode = (
    phoneNumber: string,
    regex = peruPhoneNumberCodeRegex,
) => phoneNumber.replace(regex, '');
