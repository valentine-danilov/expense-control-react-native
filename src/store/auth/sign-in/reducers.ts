import {signIn} from './thunk';
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {AuthState} from "../state/auth.state";
import {Statuses} from "../../../util/status.util";

export default (builder: ActionReducerMapBuilder<AuthState>) => {
    builder.addCase(signIn.pending, ((state, action) => {
        state.status = 'pending'
    }))
    builder.addCase(signIn.fulfilled, (state, action) => {
        state.status = 'signed-in'
        state.user = action.payload
    })
    builder.addCase(signIn.rejected, ((state, action) => {
        state.status = action.error.code === 'UserNotConfirmedException' ? 'not-verified' : 'failed'
        state.error = action.error.message
        state.user = {
            username: action.meta.arg.username
        }
    }))
}
