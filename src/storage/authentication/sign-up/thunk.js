import {createAsyncThunk} from "@reduxjs/toolkit";
import {doSignUp} from "../../../service/auth/auth.client";

export const signUp = createAsyncThunk('auth/sing-up', async ({firstName, lastName, login, email, password}) => {
    return await doSignUp({firstName, lastName, login, email, password});
})
