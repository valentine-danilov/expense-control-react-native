import {signOut} from './thunk';
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {AuthState} from "../state/auth.state";

export default (builder: ActionReducerMapBuilder<AuthState>) => {
    builder.addCase(signOut.pending, ((state, action) => {
        state.status = 'pending'
    }))
    builder.addCase(signOut.fulfilled, (state, action) => {
        state.status = 'idle'
        state.user = undefined
    })
    builder.addCase(signOut.rejected, ((state, action) => {
        state.status = 'failed'
        state.error = action.error.message
    }))
}
