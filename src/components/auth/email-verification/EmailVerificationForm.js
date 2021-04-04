import React from 'react'
import Form from '../../common/form/Form'
import {useDispatch, useSelector} from "react-redux";
import {verifyCode} from '../../../storage/auth/slice/verification.slice'
import config from "./config";

const EmailVerificationForm = ({status, error, username}) => {
    const dispatch = useDispatch();

    config.submitFunction = values => {
         dispatch(verifyCode({
             code: values.code,
             username: username
         }))
    };
    config.submitError = (status === 'failed') ? (error || 'Something went wrong ;(') : ''
    config.submitStatus = status;

    return <Form {...config}/>
}


export default EmailVerificationForm;

