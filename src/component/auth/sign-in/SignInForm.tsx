import React from "react";
import {HLFormProps} from "../../../domain/props/form/HLFormProps";
import {getConfig} from "./config";
import {useAppDispatch} from "../../../store/hooks";
import Form from "../../common/form/Form";
import {signIn} from "../../../store/auth/sign-in/thunk";
import {getError} from "../../../util/form.util";

const SignInForm : React.FC<HLFormProps> = (props) => {
    const dispatch = useAppDispatch();
    const submitFunction = (values: any) => {
        dispatch(signIn({
                username: values.login,
                password: values.password
            }
        ))
    }
    const config = getConfig(submitFunction, getError(props.status, props.error))
    return <Form {...config}/>
}

export default SignInForm;

