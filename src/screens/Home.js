import React from "react";
import {Text, View} from "react-native";
import Styles from './styles'
import {useSelector} from "react-redux";

const HomeScreen = () => {
    const loggedInUser = useSelector(state => {
        console.log(state)
        return state.auth.user
    })
    return (
        <View style={Styles.container}>
            <Text>
                This is going to be Home screen
            </Text>
            <Text>
                Logged in user: {loggedInUser.username}
            </Text>
            <Text>
                Logged in user's email: {loggedInUser.email}
            </Text>
        </View>
    )
}

export default HomeScreen;