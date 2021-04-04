import React from 'react'
import Form from '../../common/form/Form'
import config from "./config";
import {signUp} from "../../../storage/authentication/sign-up/thunk";
import {useDispatch} from "react-redux";
import STATUS from '../../../util/status.util'

const SignUpForm = ({status, error}) => {
    const dispatch = useDispatch();
    config.submitFunction = values => {
        dispatch(signUp({
            firstName: values.firstName,
            lastName: values.lastName,
            login: values.login,
            email: values.email,
            password: values.password
        }))
    };
    config.submitError = (status === STATUS.FAILED) ? (error || 'Something went wrong ;(') : ''
    return <Form {...config}/>
}

export default SignUpForm;

