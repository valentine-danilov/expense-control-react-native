import {configureStore} from "@reduxjs/toolkit";
import authReducer from './authentication/auth.slice';

export default configureStore({
    reducer: {
        auth: authReducer
    }
})