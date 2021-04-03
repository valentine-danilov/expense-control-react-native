import SignInSchema from "./schema";

export default {
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