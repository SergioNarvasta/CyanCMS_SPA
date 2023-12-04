import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import type { CustomToggleProps } from './models';

export const CustomToggle = ({ children, eventKey }: CustomToggleProps) => {
    const decoratedOnClick = useAccordionButton(eventKey, () => {});

    return <div onClick={decoratedOnClick}>{children}</div>;
};
