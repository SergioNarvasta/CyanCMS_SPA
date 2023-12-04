import { Navigate, Outlet } from 'react-router-dom';

import { RedirectExternal, RedirectJuntoz } from '../';
import { useAppSelector, useValidationSession } from '../../hooks';
import { UserRoles } from '../../models';
import { MainLoader } from '../Loaders/MainLoader';
import type { ProtectedRoutesProps } from './models';

export const ProtectedRoute = ({
    role = UserRoles.MERCHANT,
    returnToJuntoz = false,
}: ProtectedRoutesProps) => {
    const { isAuthenticated, isLoadingValidation } = useValidationSession();
    const { profile } = useAppSelector((state) => state.user);

    const hasRoles: boolean =
        profile?.roles?.includes(role) ||
        profile?.roles?.includes(UserRoles.KAMADMIN);

    if (isLoadingValidation) return <MainLoader />;

    if (!hasRoles && returnToJuntoz) return <RedirectJuntoz />;
    else if (!isAuthenticated) return <RedirectExternal />;

    if (!hasRoles) return <Navigate to="/inicio" replace />;

    return <Outlet />;
};
