import {handleFulfilled, handleLoading, handleRejected} from "../../../util/slice.util";
import {verifyCode} from './thunk';
import Status from '../../../util/status.util'

export default {
    [verifyCode.pending]: (state, action) => handleLoading(state),
    [verifyCode.fulfilled]: (state, action) => {
        const error = action.payload.error
        if (error) {
            state.status = Status.FAILED
            state.error = error
        } else {
            state.status = Status.EMAIL_VERIFIED
        }
    },
    [verifyCode.rejected]: (state, action) => {
        state.status = Status.FAILED
        const error = action.error
        if (error) {
            state.error = error.message
            console.error(`REJECTED: ${error}`)
        }
    }
}