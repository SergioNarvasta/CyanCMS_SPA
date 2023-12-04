import type { UserRoles } from '../../../models';
export interface ProtectedRoutesProps {
    role: UserRoles;
    returnToJuntoz?: boolean;
}
