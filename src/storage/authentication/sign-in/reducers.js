import {handleLoading} from "../../../util/slice.util";
import {signIn} from './thunk';
import STATUS from '../../../util/status.util'

export default {
    [signIn.pending]: (state, action) => handleLoading(state, 'signIn'),
    [signIn.fulfilled]: (state, action) => handleFulfilled(state, action),
    [signIn.rejected]: (state, action) => handleRejected(state, action)
}

const handleFulfilled = (state, action) => {
    const error = action.payload.error
    state.user = {...(state.user), ...(action.payload.user)}
    if (error) {
        state.signIn.error = error.message
        state.signIn.status = error.name === 'UserNotConfirmedException' ? STATUS.USER_NOT_CONFIRMED : STATUS.FAILED
    } else {
        state.loggedIn = true
        state.token = action.payload.token
        state.signIn.status = STATUS.SUCCEEDED
        state.signIn.error = null
    }
}

const handleRejected = (state, action) => {
    state.signIn.status = STATUS.FAILED
    if (action.error) {
        state.signIn.error = action.error.message
        if (action.error.name === 'UserNotConfirmedException') {
            state.signIn.status = STATUS.USER_NOT_CONFIRMED
        }
    }
}
