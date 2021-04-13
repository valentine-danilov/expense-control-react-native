import {createAsyncThunk} from "@reduxjs/toolkit";
import {doSignOut} from "../../../service/auth/auth.client";

export const signOut = createAsyncThunk('auth/signOut', async () => {
    return await doSignOut();
})