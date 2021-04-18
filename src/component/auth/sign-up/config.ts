import SignUpSchema from './schema'
import {FormProps} from "../../../domain/props/form/FormProps";

export const getConfig = (submitFunction: (values: any) => void, submitError: string) : FormProps => {
    return {
        submitFunction,
        submitError,
        validationSchema: SignUpSchema,
        submitButtonTitle: 'Sign Up',
        formFields: [
            {
                fieldName: 'login',
                inputType: 'text',
                fieldPlaceholder: 'Login',
                icon: 'account'
            },
            {
                fieldName: 'email',
                inputType: 'text',
                fieldPlaceholder: 'E-Mail',
                icon: 'email'
            },
            {
                fieldName: 'password',
                inputType: 'text',
                fieldPlaceholder: 'Password',
                secureTextEntry: true,
                icon: 'lock'
            },
            {
                fieldName: 'repeatedPassword',
                inputType: 'text',
                fieldPlaceholder: 'Repeat Password',
                secureTextEntry: true,
                icon: 'repeat'
            }
        ]
    }
}