enum FilterAction {
    Equal = 'eq',
    NotEqual = 'ne',
    GreaterThan = 'gt',
    GreaterThanOrEqual = 'ge',
    LessThan = 'lt',
    LessThanOrEqual = 'le',
    Contains = 'contains',
    StartsWith = 'startswith',
    EndsWith = 'endswith',
}

interface Filter<T> {
    key: string;
    value: T;
    action: `${FilterAction}`;
    nullConditional?: (value: T) => boolean;
}

// TODO: Make a function to get the conditional by type
export const makeFilter = <T extends boolean | string | number>({
    key,
    value,
    action,
    nullConditional,
}: Filter<T>) => {
    const conditional =
        nullConditional ?? ((v) => v === null && v === undefined);
    return conditional(value) ? '' : `${key} ${action} ${value.toString()}`;
};
