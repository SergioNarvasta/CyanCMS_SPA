import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { MainLoader } from '../../Loaders/MainLoader';

import './PublicLayout.scss';

export const PublicLayout = () => {
    return (
        <Suspense fallback={<MainLoader />}>
            <main className="public-layout position-relative">
                <Outlet />
            </main>
        </Suspense>
    );
};
