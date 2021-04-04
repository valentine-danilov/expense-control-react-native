import {createSlice} from '@reduxjs/toolkit';
import STATUS from '../../util/status.util';
import authenticationReducers from './auth.reducers'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userVerification: {
            status: STATUS.IDLE,
            error: null,
            code: null,
            confirmationDestination: null
        },
        signUp: {
            status: STATUS.IDLE,
            error: null,
        },
        signIn: {
            status: STATUS.IDLE,
            error: null
        },
        user: {},
        loggedIn: false,
        token: null,
    },
    reducers: {},
    extraReducers: authenticationReducers
})

export default authSlice.reducer