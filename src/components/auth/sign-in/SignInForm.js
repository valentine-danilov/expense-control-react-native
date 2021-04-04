import React from 'react'
import Form from '../../common/form/Form'
import config from "./config";
import {signIn} from "../../../storage/authentication/sign-in/thunk";
import {useDispatch} from "react-redux";
import STATUS from '../../../util/status.util'

const SignInForm = ({status, error}) => {
    const dispatch = useDispatch();
    config.submitFunction = values => {
        dispatch(signIn({
            username: values.login,
            password: values.password
        }))
    };
    config.submitError = (status === STATUS.FAILED) ? (error || 'Something went wrong ;(') : ''
    return <Form {...config}/>
}

export default SignInForm;

