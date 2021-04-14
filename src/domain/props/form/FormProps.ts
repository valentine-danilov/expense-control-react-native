import {FormField} from "./FormField";

export interface FormProps {
    submitFunction: (values: any) => void,
    formFields: FormField[],
    validationSchema: any,
    submitButtonTitle?: string,
    submitError?: string
}