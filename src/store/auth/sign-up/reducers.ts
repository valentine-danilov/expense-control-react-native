import {signUp} from './thunk';
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {AuthState} from "../state/auth.state";

export default (builder: ActionReducerMapBuilder<AuthState>) => {
    builder.addCase(signUp.pending, ((state, action) => {
        state.status = 'pending'
    }))
    builder.addCase(signUp.fulfilled, (state, action) => {
        state.status = 'not-verified'
        state.user = action.payload
    })
    builder.addCase(signUp.rejected, ((state, action) => {
        state.status = 'failed'
        console.log(action.error)
        state.error = action.error.message
    }))
}
