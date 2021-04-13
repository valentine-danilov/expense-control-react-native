import React from 'react'
import PropTypes from 'prop-types'
import {Text, View} from "react-native";
import {Formik} from 'formik';

import styles from "./styles";
import FormTextInput from "./input/FormTextInput";
import ActionButton from "../button/ActionButton";
import {HelperText} from "react-native-paper";
import PasswordInput from "./input/PasswordInput";

const Form = ({submitFunction, validationSchema, submitButtonTitle, formFields, submitError}) => {
    const initialValues = getInitialValues(formFields)
    return (
        <Formik
            onSubmit={values => submitFunction(values)}
            initialValues={initialValues}
            validationSchema={validationSchema}>
            {
                ({handleSubmit, handleChange, errors, touched}) => {
                    return (
                        <View style={styles.container}>
                            <HelperText style={styles.error} type="error"
                                        visible={!!submitError}>{submitError}</HelperText>
                            <View>
                                {
                                    formFieldsToInputs(formFields, handleChange, errors, touched)
                                }
                            </View>
                            <ActionButton
                                title={submitButtonTitle || 'Submit'}
                                onPress={() => handleSubmit()}
                            />
                        </View>);
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
    const error = (errors[formField.fieldName] && touched[formField.fieldName]) ? errors[formField.fieldName] : '';

    if (formField.secureTextEntry) {
        return (
            <PasswordInput
                key={formField.fieldName}
                {...formField}
                handleChange={handleChange}
                error={error}
            />
        )
    }
    return (
        <FormTextInput
            key={formField.fieldName}
            {...formField}
            handleChange={handleChange}
            error={error}
        />
    )
}

Form.propTypes = {
    submitFunction: PropTypes.func.isRequired,
    validationSchema: PropTypes.object,
    submitButtonTitle: PropTypes.string,
    submitError: PropTypes.string,
    submitStatus: PropTypes.string,
    formFields: PropTypes.arrayOf(PropTypes.shape({
        fieldName: PropTypes.string.isRequired,
        inputType: PropTypes.oneOf(['text', 'radio']).isRequired,
        initialValue: PropTypes.string,
        fieldPlaceholder: PropTypes.string,
        autoCompleteType: PropTypes.oneOf(['off', 'username', 'password', 'email', 'name', 'tel', 'street-address', 'postal-code', 'cc-number', 'cc-csc', 'cc-exp', 'cc-exp-month', 'cc-exp-year']),
        autoFocus: PropTypes.bool,
        returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send']),
        secureTextEntry: PropTypes.bool,
        icon: PropTypes.string
    }))
}

export default Form;