export const onlyStringRegex: RegExp = /^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ\s]+$/;

export const numberWithDecimalRegex: RegExp = /^[0-9]+(\.[0-9]+)?$/;

export const numberWithTwoDecimalRegex: RegExp = /^\d+(\.\d{1,2})?$/;

export const numberWithTwoDecimalandFiveRegex: RegExp = /^\d{1,5}(\.\d{1,2})?$/;

// * regex for 6 digits and 2 decimals -> 123456.12
export const numberWithSixDigitsAndTwoDecimalsRegex: RegExp =
    /^\d{1,6}(?:\.\d{1,2})?$/;

// * Onboarding *

export const peruPhoneNumberCodeRegex: RegExp = /^\+?51/;

export const phoneRegex: RegExp = /^9\d{8}$/;

export const invalidCharactersRegex: RegExp = /^[^ñÑáéíóúÁÉÍÓÚäÄëËïÏöÖüÜ¨]*$/;
export const invalidLoginCharactersRegex: RegExp =
    /^[^áéíóúÁÉÍÓÚäÄëËïÏöÖüÜ¨]*$/;

export const passwordRegex: RegExp =
    /^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*[~!@#$%^&*_/\-+='|\\(){}[\]:;"'<>,.?/]).*$/;

export const blankSpacesRegex: RegExp = /^(?!\s)(.*\S)$/;

export const blankSpaceBetweenWords: RegExp =
    /^(?!.*\s{2})(?:[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ¨]+\s?)+$/;

export const passportRegex: RegExp = /^(?=.*\d)[a-zA-Z\d]+[a-zA-Z\d]*$/;

export const carneExtRegex: RegExp = /^(?=.*\d)[a-zA-Z\d]+-?[a-zA-Z\d]*$/;

export const urlRegex: RegExp = /^(http|https):\/\/[^ "]+$/;

export const rucRegex: RegExp = /^10\d{9}|20\d{9}$/;

export const hasOnlyNumbers: RegExp = /^(?!^\d+$)^.+$/;

export const regexRazonSocial: RegExp =
    /^(?=.*[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ])[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ\s]*(?:[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ\s][a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ\s]*){0,3}$/;

export const numberAndSpacesRegex: RegExp = /^[0-9\s]+$/;

export const bankAccountNumberRegex: RegExp = /^\d{3} \d{1,17}$/;

export const interbankAccounNumberRegex: RegExp = /^\d{3} \d{3} \d{12} \d{2}$/;

// * Fulfillment *
export const productDimensionRegex: RegExp =
    /^(10000(\.00?)?|\d{1,4}(\.\d{1,2})?)$/;

export const estimatedSaleValueRegex: RegExp =
    /^(?=.*\d)\d{1,8}(?:\.\d{1,2})?$/;

// * Warehouses *
export const latRegex: RegExp = /^-?([1-8]?\d(?:\.\d{1,4})?|90(?:\.0{1,4})?)$/;
export const lonRegex: RegExp =
    /^-?(?:180(?:\.0{1,4})?|(?:(?:1[0-7]\d)|(?:[1-9]?\d))(?:\.\d{1,4})?)$/;
