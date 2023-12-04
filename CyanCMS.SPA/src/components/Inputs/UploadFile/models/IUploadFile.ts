export interface IUploadFile {
    id: string;
    dashed: boolean;
    fileName: string;
    placeholder: string;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    onClick: () => void;
}
