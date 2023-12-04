import type { OverlayTriggerProps } from 'react-bootstrap/OverlayTrigger';
import type { Placement } from 'react-bootstrap/esm/types';

export interface ToolTipContainerProps {
    tooltip: string;
    children: React.ReactNode;
    overlayTriggerProps?: OverlayTriggerProps;
    placement?: Placement;
}
