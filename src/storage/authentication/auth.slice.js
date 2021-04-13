import {createSlice} from '@reduxjs/toolkit';
import STATUS from '../../util/status.util';
import authenticationReducers from './auth.reducers'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userVerification: {
            code: null,
            confirmationDestination: null
        },
        status: STATUS.IDLE,
        user: {},
        loggedIn: false,
        token: null,
    },
    reducers: {},
    extraReducers: authenticationReducers
})

export default authSlice.reducer