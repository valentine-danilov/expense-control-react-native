import {handleFulfilled, handleLoading, handleRejected} from "../../../util/slice.util";
import {verifyCode} from './thunk';

export default {
    [verifyCode.pending]: (state, action) => handleLoading(state, 'userVerification'),
    [verifyCode.fulfilled]: (state, action) => handleFulfilled(state, 'userVerification', action),
    [verifyCode.rejected]: (state, action) => handleRejected(state, 'userVerification', action)
}