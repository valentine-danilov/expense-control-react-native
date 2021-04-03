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
        [signIn.pending]: (state, action) => handleLoading(state),
        [signIn.fulfilled]: (state, action) => handleFulfilled(state, action),
        [signIn.rejected]: (state, action) => handleRejected(state, action),
        [signUp.pending]: (state, action) => handleLoading(state),
        [signUp.fulfilled]: (state, action) => handleFulfilled(state, action),
        [signUp.rejected]: (state, action) => handleRejected(state, action)
    }
})

const handleLoading = state => {
    state.status = 'loading'
}

const handleFulfilled = (state, action) => {
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
}

const handleRejected = (state, action) => {
    state.status = 'failed'
    state.error = action.error.message
}

export const {logOut} = authSlice.actions
export default authSlice.reducer