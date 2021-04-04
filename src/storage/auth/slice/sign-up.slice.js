import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {doSignUp} from '../../../service/auth/auth.client'
import {handleLoading, handleFulfilled, handleRejected} from "../../../util/slice.util";

export const signUp = createAsyncThunk('auth/singUp', async ({firstName, lastName, login, email, password}) => {
    console.log("SIGN UP", login)
    return await doSignUp({firstName, lastName, login, email, password});
})

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState: {
        status: 'idle',
        error: null,
        dest: null,
        username: null
    },
    extraReducers: {
        [signUp.pending]: (state, action) => handleLoading(state),
        [signUp.fulfilled]: (state, action) => {
            handleFulfilled(state, action)
            state.dest = action.payload.confirmationDestination;
            state.username = action.payload.username;
        },
        [signUp.rejected]: (state, action) => handleRejected(state, action)
    }
})

export default signUpSlice.reducer