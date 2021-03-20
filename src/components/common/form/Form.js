import React from 'react'
import PropTypes from 'prop-types'
import {Formik} from 'formik';
import {Button, Text, TextInput} from "react-native";

const Form = ({submitFunction, validationSchema, submitButtonTitle, formFields}) => {
    const initialValues = getInitialValues(formFields)
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => submitFunction(values)}
            validationSchema={validationSchema}>
            {
                ({handleSubmit, handleChange, errors, touched}) => {
                    return (
                        <>
                            {
                                formFieldsToInputs(formFields, handleChange, errors, touched)
                            }
                            <Button
                                title={submitButtonTitle || 'Submit'}
                                onPress={() => handleSubmit()}
                            />
                        </>);
                }
            }
        </Formik>
    )
}

const getInitialValues = formFields => {
    if (formFields) {
        return formFields.reduce((obj, item) => ({
            ...obj,
            [item.fieldName]: (item.initialValue || '')
        }), {})
    }
    return {}
}

const formFieldsToInputs = (formFields, handleChange, errors, touched) => {
    return formFields.map(field => {
        switch (field.inputType) {
            case 'text':
                return formFieldToTextInput(field, handleChange, errors, touched)
            default:
                return formFieldToTextInput(field, handleChange, errors, touched)
        }
    })
}

const formFieldToTextInput = (formField, handleChange, errors, touched) => {
    return (
        <>
            <TextInput
                key={formField.fieldName}
                placeholder={formField.fieldPlaceholder || ''}
                autoCompleteType={formField.autoCompleteType || 'off'}
                autoFocus={formField.autoFocus || false}
                returnKeyType={formField.returnKeyType || 'done'}
                secureTextEntry={formField.secureTextEntry || false}
                onChangeText={handleChange(formField.fieldName)}
            />
            {errors[formField.fieldName] && touched[formField.fieldName] ? (
                <Text>{errors[formField.fieldName]}</Text>
            ) : null}
        </>
    )
}

Form.propTypes = {
    submitFunction: PropTypes.func.isRequired,
    validationSchema: PropTypes.object,
    submitButtonTitle: PropTypes.string,
    formFields: PropTypes.arrayOf(PropTypes.shape({
        fieldName: PropTypes.string.isRequired,
        inputType: PropTypes.oneOf(['text', 'radio']).isRequired,
        initialValue: PropTypes.string,
        fieldPlaceholder: PropTypes.string,
        autoCompleteType: PropTypes.oneOf(['off', 'username', 'password', 'email', 'name', 'tel', 'street-address', 'postal-code', 'cc-number', 'cc-csc', 'cc-exp', 'cc-exp-month', 'cc-exp-year']),
        autoFocus: PropTypes.bool,
        returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send']),
        secureTextEntry: PropTypes.bool
    }))
}

export default Form;