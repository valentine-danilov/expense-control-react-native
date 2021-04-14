import {createAsyncThunk} from "@reduxjs/toolkit";
import {doSignIn} from "../../../service/auth/cognito.service";

export const signIn = createAsyncThunk('auth/sign-in', async (signInInEntity: {username: string, password: string}) => {
    return await doSignIn(signInInEntity.username, signInInEntity.password);
})