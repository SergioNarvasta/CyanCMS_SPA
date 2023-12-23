import { z } from 'zod';

const stringSchema = z.string();

export function isString(variable: unknown): variable is string {
    try {
        stringSchema.parse(variable);
        return true;
    } catch (error) {
        return false;
    }
}
