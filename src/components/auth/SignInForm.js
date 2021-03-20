import React, {useState} from 'react'
import Form from '../common/form/Form'
import * as Yup from 'yup'
import {useDispatch, useSelector} from "react-redux";
import {signIn} from '../../storage/auth/slice/auth.slice'
import {Text} from "react-native";

const SignInSchema = Yup.object().shape({
    login: Yup.string()
        .min(1, 'Last name is too short')
        .max(70, 'Last name is too long')
        .required('Field is required'),
    password: Yup.string()
        .matches(/[A-Za-z0-9]{2,50}/)
        .required('Field is required')
})

const signInFormConfiguration = {
    validationSchema: SignInSchema,
    submitButtonTitle: 'Sign in',
    formFields: [
        {
            fieldName: 'login',
            inputType: 'text',
            fieldPlaceholder: 'Login',
            autoFocus: true,
        },
        {
            fieldName: 'password',
            inputType: 'text',
            fieldPlaceholder: 'Password',
            secureTextEntry: true
        }
    ]
}

const SignInForm = props => {

    const status = useSelector(state => state.auth.status);
    const error = useSelector(state => state.auth.error);

    const dispatch = useDispatch();

    signInFormConfiguration.submitFunction = values => {
        dispatch(signIn({
            username: values.login,
            password: values.password
        }))
    };

    return (
        <>
            {(status === 'failed') ? (
                <Text>{error || 'Something went wrong ;('}</Text>
            ) : null}
            <Form {...signInFormConfiguration}/>
        </>
)
}


export default SignInForm;

