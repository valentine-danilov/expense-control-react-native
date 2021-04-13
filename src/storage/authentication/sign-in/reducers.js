import {handleLoading} from "../../../util/slice.util";
import {signIn} from './thunk';
import Status from '../../../util/status.util'

export default {
    [signIn.pending]: (state, action) => handleLoading(state),
    [signIn.fulfilled]: (state, action) => handleFulfilled(state, action),
    [signIn.rejected]: (state, action) => handleRejected(state, action)
}

const handleFulfilled = (state, action) => {
    state.user = {...(state.user), ...(action.payload.user)}

    const error = action.payload.error
    if (error) {
        state.error = error.message
        state.status = error.name === 'UserNotConfirmedException' ? Status.USER_NOT_CONFIRMED : Status.FAILED
    } else {
        state.token = action.payload.token
        state.status = Status.LOGGED_IN
        state.error = null
    }
}

const handleRejected = (state, action) => {
    state.status = Status.FAILED

    const error = action.error
    if (error) {
        state.error = error.message
        if (action.error.name === 'UserNotConfirmedException') {
            state.status = Status.USER_NOT_CONFIRMED
        }
    }
}
