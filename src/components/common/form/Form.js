import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Formik} from 'formik';
import {Text, View, Animated, ActivityIndicator} from "react-native";
import styles from "./styles";
import FormTextInput from "./input/FormTextInput";
import ActionButton from "../button/ActionButton";
import {fadeIn, fadeOut} from "../../../service/animation/animation.service"

const Form = ({submitFunction, validationSchema, submitButtonTitle, formFields, submitError, submitStatus}) => {
    const initialValues = getInitialValues(formFields)
    const [opacity] = useState(new Animated.Value(1))

    if (isSubmitting(submitStatus)) {
        fadeOut(opacity)
    }

    if (!isSubmitting(submitStatus)) {
        fadeIn(opacity)
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => {
                submitFunction(values)
            }}
            validationSchema={validationSchema}>
            {
                ({handleSubmit, handleChange, errors, touched}) => {
                    return (
                        <View style={styles.container}>
                            <Text style={styles.error}>{submitError}</Text>
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
    return (
        <FormTextInput
            {...formField}
            handleChange={handleChange}
            error={error}
        />
    )
}

const isSubmitting = status => status === 'loading'

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
        secureTextEntry: PropTypes.bool
    }))
}

export default Form;