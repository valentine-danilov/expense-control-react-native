import {configureStore} from "@reduxjs/toolkit";
import authReducer from './auth/slice/auth.slice';

export default configureStore({
    reducer: {
        auth: authReducer
    }
})