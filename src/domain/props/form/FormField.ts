export interface FormField {
    fieldName: string,
    inputType: 'text' | 'radio',
    fieldPlaceholder?: string,
    initialValue?: string
    autoFocus?: boolean,
    icon?: string,
    autoCompleteType?: 'off' | 'username' | 'password' | 'email' | 'name' | 'tel' | 'street-address' | 'postal-code' | 'cc-number' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year',
    secureTextEntry?: boolean
}