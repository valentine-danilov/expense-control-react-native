import React from "react";
import {View} from "react-native";
import {Styles} from './styles';
import {HelperText, TextInput} from "react-native-paper";
import {FormInputProps} from "../../../../domain/props/form/FormInputProps";

const FormTextInput : React.FC<FormInputProps> = (props) => (
    <View>
        <TextInput
            style={Styles.input}
            error={!!props.error}
            label={props.fieldPlaceholder || ''}
            mode="outlined"
            autoCompleteType={props.autoCompleteType || 'off'}
            autoFocus={props.autoFocus || false}
            secureTextEntry={props.secureTextEntry || false}
            onChangeText={props.handleChange(props.fieldName)}
            left={
                props.icon && <TextInput.Icon style={{marginTop: 10}} name={props.icon}/>
            }
        />
        <HelperText style={Styles.error} type="error" visible={!!props.error}>{props.error}</HelperText>
    </View>
)

export default FormTextInput;