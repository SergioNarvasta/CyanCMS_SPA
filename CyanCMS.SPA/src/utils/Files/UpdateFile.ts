export function changeFileName(file: File) {
    const newFileName = file.name.replace(/\s/g, '');
    const { type, lastModified } = file;
    const newFile = new File([file], newFileName, {
        type,
        lastModified,
    });
    return newFile;
}
