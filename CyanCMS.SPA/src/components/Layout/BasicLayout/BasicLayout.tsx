import { Outlet } from 'react-router-dom';

export const BasicLayout = ({ children }: { children?: React.ReactNode }) => {
    return (
        <main className="p-2 p-md-4 d-flex justify-content-center w-100 min-vh-100 overflow-auto">
            {children ?? <Outlet />}
        </main>
    );
};
