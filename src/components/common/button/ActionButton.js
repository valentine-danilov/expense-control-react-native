import React from "react";
import {Button} from 'react-native-paper'

const ActionButton = ({title, onPress}) => {
    return (
        <Button mode="contained" onPress={onPress} labelStyle={{color: '#8c8c8c'}}>
            {title}
        </Button>
    )
}

export default ActionButton;