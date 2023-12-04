import { useState } from 'react';
import { MdOutlineClose, MdOutlinePlayCircleFilled } from 'react-icons/md';

import './FloatingButton.scss';
import { ModalVideoBlur } from '../../Modal';

interface Props {
    text: string;
    videoUrl: string;
}

export const FloatingButton = ({ text, videoUrl }: Props) => {
    const [show, setShow] = useState<boolean>(true);
    const [openVideo, setOpenVideo] = useState<boolean>(false);

    if (!show) return null;

    return (
        <>
            <div className="floating-button__container" role="button">
                <button
                    className="floating-button__close"
                    onClick={() => setShow(false)}
                >
                    <MdOutlineClose
                        style={{
                            minHeight: 8,
                            minWidth: 8,
                        }}
                    />
                </button>
                <button
                    className="floating-button"
                    onClick={() => setOpenVideo(true)}
                >
                    <span className="floating-button__icon">
                        <MdOutlinePlayCircleFilled />
                    </span>
                    <span className="floating-button__text">{text}</span>
                </button>
            </div>
            {openVideo && (
                <ModalVideoBlur
                    videoUrl={videoUrl}
                    close={() => setOpenVideo(false)}
                />
            )}
        </>
    );
};
