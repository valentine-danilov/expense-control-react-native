import VerifyEmailSchema from './schema'
import {FormProps} from "../../../domain/props/form/FormProps";

export const getConfig = (submitFunction: (values: any) => void, submitError: string) : FormProps => {
    return {
        submitFunction,
        submitError,
        validationSchema: VerifyEmailSchema,
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
}