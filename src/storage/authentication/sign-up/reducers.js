import {handleLoading, handleRejected} from "../../../util/slice.util";
import {signUp} from './thunk';
import STATUS from '../../../util/status.util'

export default {
    [signUp.pending]: (state, action) => handleLoading(state, 'signUp'),
    [signUp.fulfilled]: (state, action) => handleFulfilled(state, action),
    [signUp.rejected]: (state, action) => handleRejected(state, 'signUp', action)
}

const handleFulfilled = (state, action) => {
    const error = action.payload.error
    if (error) {
        state.signUp.status = STATUS.FAILED
        state.signUp.error = error
    } else {
        state.userVerification.dest = action.payload.confirmationDestination;
        state.user.username = action.payload.username
        state.signUp.status = STATUS.SUCCEEDED
    }
}