import React from "react";
import {Text, TextInput, View} from "react-native";
import styles from './styles'

const FormTextInput = ({fieldName, fieldPlaceholder, autoCompleteType, autoFocus, returnKeyType, secureTextEntry, handleChange, error}) => (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder={fieldPlaceholder || ''}
            autoCompleteType={autoCompleteType || 'off'}
            autoFocus={autoFocus || false}
            returnKeyType={returnKeyType || 'done'}
            secureTextEntry={secureTextEntry || false}
            onChangeText={handleChange(fieldName)}
        />
        <Text style={styles.error}>{error}</Text>
    </View>
)

export default FormTextInput;