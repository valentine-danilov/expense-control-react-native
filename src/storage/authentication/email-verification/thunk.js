import {createAsyncThunk} from "@reduxjs/toolkit";
import {doVerify} from "../../../service/auth/auth.client";

export const verifyCode = createAsyncThunk('auth/verifyCode', async ({username, code}) => {
    return await doVerify({username, code});
})