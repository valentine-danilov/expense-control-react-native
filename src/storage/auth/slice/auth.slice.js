import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {doAuthenticate} from '../../../service/auth/auth.client'
import {handleLoading, handleRejected} from "../../../util/slice.util";

export const signIn = createAsyncThunk('auth/signIn', async ({username, password}) => {
    return await doAuthenticate(username, password);
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false,
        token: null,
        status: 'idle',
        error: null,
        email: null,
        username: null
    },
    reducers: {
        logOut: (state, action) => {
            state.loggedIn = false
            state.token = null
        }
    },
    extraReducers: {
        [signIn.pending]: (state, action) => handleLoading(state),
        [signIn.fulfilled]: (state, action) => {
            handleFulfilled(state, action)
            state.loggedIn = true
            state.token = action.payload.token
            state.username = action.payload.username
        },
        [signIn.rejected]: (state, action) => handleRejected(state, action),
    }
})

export const handleFulfilled = (state, action) => {
    const error = action.payload.error
    if (error) {
        state.status = 'not-confirmed'
        state.error = error

    } else {
        state.status = 'succeeded'
    }
}

export const {logOut} = authSlice.actions
export default authSlice.reducer