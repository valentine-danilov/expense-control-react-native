import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {doAuthenticate} from '../../../service/auth/auth.client'



export const signIn = createAsyncThunk('auth/signIn', async ({username, password}) => {
    console.log(username, password)
    return await doAuthenticate(username, password);
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
        signUp: (state, action) => {

        },
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
            if (!error) {
                state.status = 'failed'
                state.error = error
            } else {
                state.status = 'succeeded'
                state.loggedIn = true
                state.token = action.payload.token
                console.log('SIGN IN FULLFILLED :: ', action.payload)
            }
        },
        [signIn.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export const {signUp, logOut} = authSlice.actions
export default authSlice.reducer