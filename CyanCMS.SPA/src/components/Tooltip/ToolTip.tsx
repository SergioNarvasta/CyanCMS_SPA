import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MdOutlineErrorOutline } from 'react-icons/md';

import type { IToolTip } from './models/IToolTip';

export const ToolTip = ({ placement, content }: IToolTip) => {
    return (
        <OverlayTrigger
            key={placement + content}
            placement={placement}
            overlay={<Tooltip>{content}</Tooltip>}
        >
            <span>
                <MdOutlineErrorOutline color="#8b8b8b" size={20} />
            </span>
        </OverlayTrigger>
    );
};
