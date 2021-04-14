import React from "react";
import {Text, View} from "react-native";
import {Styles} from './styles'
import {useAppSelector} from "../../store/hooks";

const HomeScreen = () => {

    const user = useAppSelector(state => state.auth.user)
    const printableUser = {
        id: user?.id,
        username: user?.username,
        email: user?.email
    }
    return (
        <View style={Styles.container}>
            <Text>
                This is going to be Home screen
            </Text>
            <Text>
                Logged in user: {JSON.stringify(printableUser)}
            </Text>
        </View>
    )
}

export default HomeScreen;