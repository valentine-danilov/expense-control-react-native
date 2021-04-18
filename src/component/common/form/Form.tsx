import React from 'react'
import {View} from "react-native";
import {Formik, FormikErrors, FormikValues} from 'formik';

import {Styles} from "./styles";
import FormTextInput from "./input/FormTextInput";
import PasswordInput from "./input/PasswordInput";
import ActionButton from "../button/ActionButton";
import {HelperText} from "react-native-paper";
import {FormProps} from "../../../domain/props/form/FormProps";
import {FormField} from "../../../domain/props/form/FormField";

const Form: React.FC<FormProps> = (props) => {
    const initialValues = getInitialValues(props.formFields)
    return (
        <Formik initialValues={initialValues} validationSchema={props.validationSchema} onSubmit={values => props.submitFunction(values)}>
            {({handleSubmit, handleChange, errors, touched}) => {
                return (
                    <View style={[Styles.container, props.style]}>
                        <HelperText style={Styles.error} type="error" visible={!!props.submitError}>{props.submitError}</HelperText>
                        <View>{formFieldsToInputs(props.formFields, handleChange, errors, touched)}</View>
                        <ActionButton title={props.submitButtonTitle || 'Submit'} onPress={handleSubmit}/>
                    </View>
                )
            }}
        </Formik>
    )
}

const getInitialValues = (formFields: FormField[]) => {
    if (formFields) {
        return formFields.reduce((obj, item) => ({
            ...obj,
            [item.fieldName]: (item.initialValue || '')
        }), {})
    }
    return {}
}

const formFieldsToInputs = (
    formFields: FormField[],
    handleChange: { <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void },
    errors: FormikErrors<FormikValues>,
    touched: FormikErrors<FormikValues>
) => {
    return formFields.map(field => {
        switch (field.inputType) {
            case 'text':
                return formFieldToTextInput(field, handleChange, errors, touched)
            default:
                return formFieldToTextInput(field, handleChange, errors, touched)
        }
    })
}

const formFieldToTextInput = (
    formField: FormField,
    handleChange: { <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void },
    errors: FormikErrors<FormikValues>,
    touched: FormikErrors<FormikValues>
) => {
    const error = (errors[formField.fieldName] && touched[formField.fieldName]) ? errors[formField.fieldName]?.toString() : '';
    if (formField.secureTextEntry) {
        return <PasswordInput key={formField.fieldName} {...formField} handleChange={handleChange} error={error}/>

    }
    return <FormTextInput key={formField.fieldName} {...formField} handleChange={handleChange} error={error}/>
}

export default Form;