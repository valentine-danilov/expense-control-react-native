import React from "react";
import {Appbar} from "react-native-paper";

const NavigationBar = ({scene}) => {
    return (
        <Appbar.Header>
            <Appbar.Content
                titleStyle={{color: '#8c8c8c'}}
                title={scene.descriptor.options.title}
            />
        </Appbar.Header>
    )
}

export default NavigationBar;