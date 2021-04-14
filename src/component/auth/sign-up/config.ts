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
}