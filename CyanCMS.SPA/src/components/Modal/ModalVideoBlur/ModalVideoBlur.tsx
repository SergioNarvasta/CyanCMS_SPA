import type { ModalVideoBlurProps } from './models';

import './ModalVideoBlur.scss';

export const ModalVideoBlur = ({ videoUrl, close }: ModalVideoBlurProps) => {
    return (
        <div className="fullscreen-video">
            <div className="video-container">
                <iframe
                    width="660"
                    height="415"
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
            <button className="btn btn-purple px-4" onClick={close}>
                Cerrar
            </button>
        </div>
    );
};
