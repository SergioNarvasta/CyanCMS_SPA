export const validateStringHasContent = (
    value: string | null | undefined,
): boolean => {
    if (value === null || value === undefined || value?.length <= 0) {
        return false;
    }
    return true;
};
