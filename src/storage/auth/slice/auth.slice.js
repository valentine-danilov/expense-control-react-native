import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {doAuthenticate, doSignUp} from '../../../service/auth/auth.client'

export const signIn = createAsyncThunk('auth/signIn', async ({username, password}) => {
    return await doAuthenticate(username, password);
})

export const signUp = createAsyncThunk('auth/singUp', async ({firstName, lastName, login, email, password}) => {
    console.log("SIGN UP", login)
    return await doSignUp({firstName, lastName, login, email, password});
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false,
        token: null,
        status: 'idle',
        error: null
    },
    reducers: {
        logOut: (state, action) => {
            state.loggedIn = false
            state.token = null
        }
    },
    extraReducers: {
        [signIn.pending]: (state, action) => {
            console.log(state)
            state.status = 'loading'
        },
        [signIn.fulfilled]: (state, action) => {
            const error = action.payload.error
            if (error) {
                state.status = 'failed'
                state.error = error
            } else {
                state.status = 'succeeded'
                state.loggedIn = true
                state.token = action.payload.token
                console.log('success')
            }
        },
        [signIn.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export const {logOut} = authSlice.actions
export default authSlice.reducer