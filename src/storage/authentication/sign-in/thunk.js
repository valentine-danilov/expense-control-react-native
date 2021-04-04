import {createAsyncThunk} from "@reduxjs/toolkit";
import {doAuthenticate} from "../../../service/auth/auth.client";

export const signIn = createAsyncThunk('auth/sign-in', async ({username, password}) => {
    return await doAuthenticate({username, password});
})