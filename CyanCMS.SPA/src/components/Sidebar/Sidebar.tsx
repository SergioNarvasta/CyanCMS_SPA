import { useState } from 'react';

import { NavBarFooter } from './components/NavBarFooter/NavBarFooter';
import { NavBarHeader } from './components/NavBarHeader/NavBarHeader';
import { NavBarNavigation } from './components/NavBarNavigation/NavBarNavigation';
import { HoveredContext } from './context/HoveredContext';

import './Sidebar.scss';

export const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(true);

    const onHover = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);

    return (
        <aside
            className={`sidebar ${
                isHovered ? 'hovered' : 'notHovered align-items-center'
            }`}
        >
            <HoveredContext.Provider value={{ isHovered, onHover, onLeave }}>
                <div className="d-flex flex-column flex-grow-1 overflow-hidden">
                    <div className="navbar-container">
                        <NavBarHeader />
                        <NavBarNavigation />
                    </div>
                    <NavBarFooter />
                </div>
            </HoveredContext.Provider>
        </aside>
    );
};
