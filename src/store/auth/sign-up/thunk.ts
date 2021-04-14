import {createAsyncThunk} from "@reduxjs/toolkit";
import {doSignUp} from "../../../service/auth/cognito.service";

export const signUp = createAsyncThunk('auth/sign-up', async (signInEntity: { username: string, email: string, password: string }) => {
    console.log(signInEntity)
    return await doSignUp(signInEntity.username, signInEntity.email, signInEntity.password);
})