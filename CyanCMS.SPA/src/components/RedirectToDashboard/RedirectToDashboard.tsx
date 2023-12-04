import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutesList } from '../../models';
export const RedirectToDashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(RoutesList.INICIO);
    }, [navigate]);
    return <></>;
};
