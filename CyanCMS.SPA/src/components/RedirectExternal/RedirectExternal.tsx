import { useEffect } from 'react';
export const RedirectExternal = () => {
    useEffect(() => {
        window.location.replace(
            import.meta.env.VITE_MERCHANT_CENTRAL_V1_URL_LOGIN,
        );
    }, []);
    return <></>;
};
