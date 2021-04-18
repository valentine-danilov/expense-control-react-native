import React from "react";
import {getConfig} from "./config";
import {useAppDispatch} from "../../../store/hooks";
import Form from "../../common/form/Form";
import {getError} from "../../../util/form.util";
import {verify} from "../../../store/auth/email-verification/thunk";
import {EmailVerificationFormProps} from "./EmailVerificationFormProps";

const EmailVerificationForm : React.FC<EmailVerificationFormProps> = (props) => {
    const dispatch = useAppDispatch();
    const submitFunction = (values: any) => {
        dispatch(verify({
                username: props.username,
                code: values.code
            }
        ))
    }
    const config = getConfig(submitFunction, getError(props.status, props.error))
    return <Form {...config} style={props.style}/>
}

export default EmailVerificationForm;

