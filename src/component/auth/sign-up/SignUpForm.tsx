import React from 'react'
import {useAppDispatch} from "../../../store/hooks";
import {HLFormProps} from "../../../domain/props/form/HLFormProps";
import {getConfig} from "./config";
import {getError} from "../../../util/form.util";
import Form from "../../common/form/Form";
import {signUp} from "../../../store/auth/sign-up/thunk";

const SignUpForm: React.FC<HLFormProps> = (props) => {
    const dispatch = useAppDispatch();
    const submitFunction = (values: any) => {
        console.log(values)
        dispatch(signUp({
            username: values.login,
            email: values.email,
            password: values.password
        }))
    };
    const config = getConfig(submitFunction, getError(props.status, props.error))
    return <Form {...config}/>
}

export default SignUpForm;

