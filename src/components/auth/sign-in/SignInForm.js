import React from 'react'
import Form from '../../common/form/Form'
import {useDispatch, useSelector} from "react-redux";
import {signIn} from '../../../storage/auth/slice/auth.slice'
import config from "./config";

const SignInForm = ({status, error}) => {
    const dispatch = useDispatch();

    config.submitFunction = values => {
        dispatch(signIn({
            username: values.login,
            password: values.password
        }))
    };
    config.submitError = (status !== 'succeeded') ? (error || 'Something went wrong ;(') : ''
    config.submitStatus = status;

    console.log('SIGN IN RENDER: ', status)
    return <Form {...config}/>
}


export default SignInForm;

