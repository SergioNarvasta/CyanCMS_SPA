import { useRef } from 'react';

import type { IUploadFile } from './models/IUploadFile';

import './UploadFile.scss';

export const UploadFile = ({
    id,
    dashed,
    fileName,
    placeholder,
    onClick,
    handleFileChange,
    style,
}: IUploadFile) => {
    const fileRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        if (fileRef.current) {
            fileRef.current.value = '';
        }
        onClick();
    };
    return (
        <div
            className={`upload-file-input ${dashed ? 'dashed' : ''}`}
            style={style}
        >
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <label htmlFor={id} className="upload-file-input-label">
                    {fileName ?? placeholder}
                </label>
                <input
                    id={id}
                    type="file"
                    hidden
                    onClick={handleClear}
                    onChange={handleFileChange}
                    ref={fileRef}
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                />
            </div>
        </div>
    );
};
