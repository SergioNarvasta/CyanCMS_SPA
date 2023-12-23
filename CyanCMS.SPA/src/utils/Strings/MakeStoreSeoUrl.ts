export const MakeStoreSeoUrl = (storeSeoUrl: string): string => {
    const juntozUrl = import.meta.env.VITE_JUNTOZ_COM;
    const [schema, domain] = juntozUrl.split('://');

    return `${schema}://${storeSeoUrl}.${domain}`;
};
