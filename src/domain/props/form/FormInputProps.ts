import * as React from "react";

export interface FormInputProps {
    fieldName: string,
    inputType: 'text' | 'radio',
    initialValue?: string,
    fieldPlaceholder?: string,
    handleChange: {
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void
    }
    error?: string,
    autoCompleteType?: 'off' | 'username' | 'password' | 'email' | 'name' | 'tel' | 'street-address' | 'postal-code' | 'cc-number' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year',
    autoFocus?: boolean,
    secureTextEntry?: boolean,
    icon?: string
}