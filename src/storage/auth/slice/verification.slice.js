import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {doVerify} from '../../../service/auth/auth.client'
import {handleLoading, handleFulfilled, handleRejected} from "../../../util/slice.util";

export const verifyCode = createAsyncThunk('auth/verifyCode', async ({username, code}) => {
    console.log("sending code ", code, username)
    return await doVerify({username, code});
})

export const verificationSlice = createSlice({
    name: 'verifyCode',
    initialState: {
        status: 'idle',
        error: null,
    },
    extraReducers: {
        [verifyCode.pending]: (state, action) => handleLoading(state),
        [verifyCode.fulfilled]: (state, action) => {
            handleFulfilled(state, action)
        },
        [verifyCode.rejected]: (state, action) => handleRejected(state, action)
    }
})

export default verificationSlice.reducer