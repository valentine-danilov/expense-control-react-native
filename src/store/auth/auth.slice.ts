import {createSlice} from "@reduxjs/toolkit";
import {AuthState} from "./state/auth.state";
import signInReducers from './sign-in/reducers'
import signUpReducers from './sign-up/reducers'
import verifyReducers from './email-verification/reducers'
import signOutReducers from './sign-out/reducers'

const initialState: AuthState = {
    status: 'idle'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        signInReducers(builder)
        signUpReducers(builder)
        verifyReducers(builder)
        signOutReducers(builder)
    }
})

export default authSlice.reducer