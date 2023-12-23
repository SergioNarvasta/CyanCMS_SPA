export const isEmptyFile = (file: File | undefined): boolean => {
    return file === undefined || !file?.size;
};
