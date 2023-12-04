import { Navigate, Outlet } from 'react-router-dom';

import { useMerchantUserRoles } from '../../hooks';
import type { MerchantUserRolesEmum } from '../../models';

export const RequireMerchantRoles = ({
    merchantRoles,
    children,
}: {
    children?: JSX.Element;
    merchantRoles: MerchantUserRolesEmum[];
}) => {
    const { hasMerchantRoles } = useMerchantUserRoles(merchantRoles);

    if (!hasMerchantRoles) return <Navigate to="/inicio" replace />;

    return children ?? <Outlet />;
};
