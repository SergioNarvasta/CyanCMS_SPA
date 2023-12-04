import { useEffect } from 'react';
export const RedirectJuntoz = () => {
    useEffect(() => {
        window.location.replace(import.meta.env.VITE_JUNTOZ_COM);
    }, []);
    return <></>;
};
