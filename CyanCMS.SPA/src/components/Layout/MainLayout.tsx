import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '..';
import { MainLoader } from '../Loaders/MainLoader';
import { useStores } from '@/hooks';

export const MainLayout = (): JSX.Element => {
    const { isLoading: isLoadingStores } = useStores();
    if (isLoadingStores) return <MainLoader />;
    return (
        <div className="min-vh-100 d-flex w-100">
            <Sidebar />
            <Suspense fallback={<MainLoader />}>
                <Outlet />
            </Suspense>
        </div>
    );
};
