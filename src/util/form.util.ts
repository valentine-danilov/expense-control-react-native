import {Status} from "../domain/Status";
import {Statuses} from "./status.util";

export const getError = (status: Status, error?: string) => {
    return status === Statuses.FAILED ? (error || 'Whoops... Something went wrong ;(') : ''
}