export const removeDoubleQuote = (value: string): string =>
    value.replace(/^"|"\\/g, '').replace(/"$/g, '');
