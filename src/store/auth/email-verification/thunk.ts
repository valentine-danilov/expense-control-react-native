import {createAsyncThunk} from "@reduxjs/toolkit";
import {doVerify} from "../../../service/auth/cognito.service";

export const verify = createAsyncThunk('auth/verify', async (verificationEntity: {username: string, code: string}) => {
    return await doVerify(verificationEntity.username, verificationEntity.code);
})