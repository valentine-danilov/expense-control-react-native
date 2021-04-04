import {configureStore} from "@reduxjs/toolkit";
import authReducer from './auth/slice/auth.slice';
import signUpReducer from './auth/slice/sign-up.slice'
import verificationReducer from "./auth/slice/verification.slice";

export default configureStore({
    reducer: {
        auth: authReducer,
        signUp: signUpReducer,
        verifyCode: verificationReducer
    }
})