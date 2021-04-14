import {createAsyncThunk} from "@reduxjs/toolkit";
import {doSignOut} from "../../../service/auth/cognito.service";

export const signOut = createAsyncThunk('auth/sign-out', async () => {
    return await doSignOut();
})