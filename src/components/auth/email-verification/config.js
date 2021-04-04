import Schema from "./schema";

export default {
    validationSchema: Schema,
    submitButtonTitle: 'Send',
    formFields: [
        {
            fieldName: 'code',
            inputType: 'text',
            fieldPlaceholder: 'Enter verification code',
            autoFocus: true,
        }
    ]
}