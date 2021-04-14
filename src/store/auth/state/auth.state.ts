import {Status} from "../../../domain/Status";
import {User} from "../../../domain/auth/User";

export interface AuthState {
    status: Status,
    user?: User,
    error?: string
}