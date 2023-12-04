import { MdErrorOutline } from 'react-icons/md';

export const TooltipText = ({ info }: { info: string }) => {
    return (
        <div
            className="d-flex align-items-center gap-2"
            style={{ fontSize: '0.75rem' }}
        >
            <MdErrorOutline />
            <span>{info}</span>
        </div>
    );
};
