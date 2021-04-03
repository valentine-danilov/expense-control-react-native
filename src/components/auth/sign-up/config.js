import SignUpSchema from "./schema";

export default {
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