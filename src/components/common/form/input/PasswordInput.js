import React, {useState} from "react";
import styles from "./styles";
import {HelperText, TextInput} from "react-native-paper";
import {View} from "react-native";

const PasswordInput = ({fieldName, fieldPlaceholder, autoCompleteType, autoFocus, returnKeyType, handleChange, error, icon}) => {

    const [showPassword, toggleShowPassword] = useState(false)

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                error={!!error}
                label={fieldPlaceholder}
                mode="outlined"
                autoCompleteType={autoCompleteType || 'off'}
                autoFocus={autoFocus || false}
                returnKeyType={returnKeyType || 'done'}
                secureTextEntry={!showPassword}
                onChangeText={handleChange(fieldName)}
                left={
                    icon && <TextInput.Icon style={{marginTop: 15}} name={icon}/>
                }
                right={
                    <TextInput.Icon forceTextInputFocus={false} style={{marginTop: 15}} name={showPassword ? 'eye-off' : 'eye'} onPress={() => toggleShowPassword(!showPassword)}/>
                }
            />
            <HelperText style={styles.error} type="error" visible={!!error}>{error}</HelperText>
        </View>
    )
}

export default PasswordInput;