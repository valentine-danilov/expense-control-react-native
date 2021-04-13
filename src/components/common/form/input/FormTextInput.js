import React from "react";
import {View} from "react-native";
import styles from './styles'
import {HelperText, Text, TextInput} from "react-native-paper";

const FormTextInput = ({fieldName, fieldPlaceholder, autoCompleteType, autoFocus, returnKeyType, secureTextEntry, handleChange, error, icon}) => (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            error={!!error}
            label={fieldPlaceholder}
            mode="outlined"
            autoCompleteType={autoCompleteType || 'off'}
            autoFocus={autoFocus || false}
            returnKeyType={returnKeyType || 'done'}
            secureTextEntry={secureTextEntry || false}
            onChangeText={handleChange(fieldName)}
            left={
                icon && <TextInput.Icon style={{marginTop: 10}} name={icon}/>
            }
        />
        <HelperText style={styles.error} type="error" visible={!!error}>{error}</HelperText>
    </View>
)

export default FormTextInput;