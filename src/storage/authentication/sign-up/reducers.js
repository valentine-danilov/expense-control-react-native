import {handleLoading} from "../../../util/slice.util";
import {signUp} from './thunk';
import Status from "../../../util/status.util";

export default {
    [signUp.pending]: (state, action) => handleLoading(state),
    [signUp.fulfilled]: (state, action) => handleFulfilled(state, action),
    [signUp.rejected]: (state, action) => handleRejected(state, action)
}

const handleFulfilled = (state, action) => {
    const error = action.payload.error
    if (error) {
        console.log(error)
        state.status = Status.FAILED
        state.error = error
    } else {
        state.userVerification.dest = action.payload.confirmationDestination;
        state.user.username = action.payload.username
        state.status = Status.USER_NOT_CONFIRMED
    }
}

const handleRejected = (state, action) => {
    state.status = Status.FAILED

    const error = action.error
    if (error) {
        console.log(error.message)
        state.error = error.message
    }
}