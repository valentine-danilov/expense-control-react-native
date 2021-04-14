import {verify} from './thunk';
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {AuthState} from "../state/auth.state";

export default (builder: ActionReducerMapBuilder<AuthState>) => {
    builder.addCase(verify.pending, ((state, action) => {
        state.status = 'pending'
    }))
    builder.addCase(verify.fulfilled, (state, action) => {
        state.status = 'verified'
    })
    builder.addCase(verify.rejected, ((state, action) => {
        state.status = 'failed'
        state.error = action.error.message
    }))
}
