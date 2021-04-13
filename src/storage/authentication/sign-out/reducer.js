import {handleLoading} from "../../../util/slice.util";
import {signOut} from './thunk';
import Status from '../../../util/status.util'

export default {
    [signOut.pending]: (state, action) => handleLoading(state),
    [signOut.fulfilled]: (state, action) => handleFulfilled(state, action),
    [signOut.rejected]: (state, action) => handleRejected(state, action)
}

const handleFulfilled = (state, action) => {
    if (action.payload.result) {
        state.status = Status.LOGGED_OUT
        state.token = null
    } else {
        state.status = Status.FAILED
        state.error = action.payload.error || 'Something went wrong while signing you out ;('
    }
}

const handleRejected = (state, action) => {
    state.status = Status.FAILED

    const error = action.error
    if (error) {
        state.error = error.message
    }
}