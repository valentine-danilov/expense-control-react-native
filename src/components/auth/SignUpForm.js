import React from 'react'
import Form from '../common/form/Form'
import * as Yup from 'yup'
import {useDispatch} from "react-redux";
import {signUp} from '../../storage/auth/slice/auth.slice'

const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(1, 'First name is too short')
        .max(70, 'First name is too long')
        .required('Field is required'),
    lastName: Yup.string()
        .min(1, 'Last name is too short')
        .max(70, 'Last name is too long')
        .required('Field is required'),
    login: Yup.string()
        .min(1, 'Last name is too short')
        .max(70, 'Last name is too long')
        .required('Field is required'),
    email: Yup.string()
        .email('Invalid Email')
        .required('Field is required'),
    password: Yup.string()
        .matches(/[A-Za-z0-9]{2,50}/)
        .required('Field is required'),
    repeatedPassword: Yup.string()
        .required('Passwords does not match')
})

const signUpFormConfiguration = {
    validationSchema: SignUpSchema,
    submitButtonTitle: 'Sign Up',
    formFields: [
        {
            fieldName: 'firstName',
            inputType: 'text',
            fieldPlaceholder: 'First Name',
            autoFocus: true,
        },
        {
            fieldName: 'lastName',
            inputType: 'text',
            fieldPlaceholder: 'Last Name',
        },
        {
            fieldName: 'login',
            inputType: 'text',
            fieldPlaceholder: 'Login',
        },
        {
            fieldName: 'email',
            inputType: 'text',
            fieldPlaceholder: 'E-Mail'
        },
        {
            fieldName: 'password',
            inputType: 'text',
            fieldPlaceholder: 'Password',
            secureTextEntry: true
        },
        {
            fieldName: 'repeatedPassword',
            inputType: 'text',
            fieldPlaceholder: 'Repeat Password',
            secureTextEntry: true
        }
    ]
}

const SignUpForm = props => {

    const dispatch = useDispatch();

    signUpFormConfiguration.submitFunction = values => {
        console.log(values)
        dispatch(signUp({
            firstName: values.firstName,
            lastName: values.lastName,
            login: values.login,
            email: values.email,
            password: values.password
        }))
    };

    return (
        <Form {...signUpFormConfiguration}/>
    )
}

export default SignUpForm;

