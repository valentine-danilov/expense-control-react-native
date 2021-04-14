import SignInSchema from './schema'
import {FormProps} from "../../../domain/props/form/FormProps";

export const getConfig = (submitFunction: (values: any) => void, submitError: string) : FormProps => {
    return {
        submitFunction,
        submitError,
        validationSchema: SignInSchema,
        submitButtonTitle: 'Sign in',
        formFields: [
            {
                fieldName: 'login',
                inputType: 'text',
                fieldPlaceholder: 'Login',
                autoFocus: true,
                icon: 'account',
                autoCompleteType: 'username'
            },
            {
                fieldName: 'password',
                inputType: 'text',
                fieldPlaceholder: 'Password',
                secureTextEntry: true,
                icon: 'lock',
                autoCompleteType: 'password'
            }
        ]
    }
}