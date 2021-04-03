import React from 'react'
import Form from '../../common/form/Form'
import {useDispatch, useSelector} from "react-redux";
import {signUp} from '../../../storage/auth/slice/sign-up.slice'
import config from "./config";
const SignUpForm = ({status, error}) => {

    const dispatch = useDispatch();
    config.submitFunction = values => {
        console.log(values)
        dispatch(signUp({
            firstName: values.firstName,
            lastName: values.lastName,
            login: values.login,
            email: values.email,
            password: values.password
        }))
    };

    config.submitError = (status === 'failed') ? (error || 'Something went wrong ;(') : ''
    config.submitStatus = status

    return (
        <Form {...config}/>
    )
}

export default SignUpForm;

