interface PluralizeProps {
    value: number;
    singular: string;
    plural: string;
}

export function pluralize({ value, plural, singular }: PluralizeProps) {
    const pluralRules = new Intl.PluralRules('es-ES');
    const numbering = pluralRules.select(value);
    switch (numbering) {
        case 'one':
            return `${value} ${singular}`;
        case 'other':
            return `${value} ${plural}`;
        default:
            throw new Error('Unknown: ' + numbering);
    }
}
