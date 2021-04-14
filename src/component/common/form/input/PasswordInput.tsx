import React, {useState} from "react";
import {Styles} from "./styles";
import {HelperText, TextInput} from "react-native-paper";
import {View} from "react-native";
import {FormInputProps} from "../../../../domain/props/form/FormInputProps";

const PasswordInput : React.FC<FormInputProps> = (props) => {

    const [showPassword, toggleShowPassword] = useState(false)

    return (
        <View>
            <TextInput
                style={Styles.input}
                error={!!props.error}
                label={props.fieldPlaceholder}
                mode="outlined"
                autoCompleteType={props.autoCompleteType || 'off'}
                autoFocus={props.autoFocus || false}
                secureTextEntry={!showPassword}
                onChangeText={props.handleChange(props.fieldName)}
                left={
                    props.icon && <TextInput.Icon style={{marginTop: 15}} name={props.icon}/>
                }
                right={
                    <TextInput.Icon forceTextInputFocus={false} style={{marginTop: 15}} name={showPassword ? 'eye-off' : 'eye'} onPress={() => toggleShowPassword(!showPassword)}/>
                }
            />
            <HelperText style={Styles.error} type="error" visible={!!props.error}>{props.error}</HelperText>
        </View>
    )
}

export default PasswordInput;