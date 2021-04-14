import React from "react";
import {Button} from 'react-native-paper'
import {ActionButtonProps} from "./ActionButtonProps";

export const ActionButton: React.FC<ActionButtonProps>= (props) => {
    return (
        <Button mode="contained" onPress={props.onPress} labelStyle={{color: '#8c8c8c'}}>
            {props.title}
        </Button>
    );
}

export default ActionButton;