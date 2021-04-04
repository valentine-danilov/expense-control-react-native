import React from 'react'
import Form from '../../common/form/Form'
import config from "./config";
import {useDispatch} from "react-redux";
import {verifyCode} from "../../../storage/authentication/email-verification/thunk";
import STATUS from '../../../util/status.util'

const EmailVerificationForm = ({status, error, username}) => {
    const dispatch = useDispatch();
    config.submitFunction = values => {
        dispatch(verifyCode({
            code: values.code,
            username: username
        }))
    };
    config.submitError = (status === STATUS.FAILED) ? (error || 'Something went wrong ;(') : ''
    return <Form {...config}/>
}


export default EmailVerificationForm;

