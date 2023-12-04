import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip, { type TooltipProps } from 'react-bootstrap/Tooltip';

import type { ToolTipContainerProps } from './models';

export const ToolTipContainer = ({
    children,
    tooltip,
    overlayTriggerProps,
    placement = 'left',
}: ToolTipContainerProps) => {
    const renderTooltip = (props: TooltipProps) => (
        <Tooltip id={tooltip} {...props}>
            {tooltip}
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement={placement}
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
            {...overlayTriggerProps}
        >
            <div>{children}</div>
        </OverlayTrigger>
    );
};
