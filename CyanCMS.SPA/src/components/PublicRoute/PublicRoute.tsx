import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useValidationSession } from '../../hooks';
import { LocalStorage, RoutesList } from '../../models';
import { MainLoader } from '../Loaders/MainLoader';

export const PublicRoute = () => {
    const { isAuthenticated, isLoadingValidation } = useValidationSession();

    const { pathname } = useLocation();

    if (isLoadingValidation) return <MainLoader />;

    if (pathname === RoutesList.WELCOME || pathname === RoutesList.REGISTER) {
        // Clear localStorage
        localStorage.removeItem(LocalStorage.TOKEN_NAME);
        localStorage.removeItem(LocalStorage.MERCHANT_CODE);
        localStorage.removeItem(LocalStorage.STORE_ID);

        return <Outlet />;
    }

    if (isAuthenticated) return <Navigate to="/inicio" replace />;

    return <Outlet />;
};
