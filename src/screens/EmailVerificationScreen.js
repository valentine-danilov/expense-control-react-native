import React, {useEffect} from "react";
import {View, Text} from "react-native";
import {useSelector} from "react-redux";
import EmailVerificationForm from "../components/auth/email-verification/EmailVerificationForm";
import Styles from './styles'

export const EmailVerificationScreen = ({route, navigation}) => {

    const status = useSelector(state => state.verifyCode.status);
    const error = useSelector(state => state.verifyCode.error)
    const email = route.params.email;
    const username = route.params.username;

    useEffect(() => {
        if (status === 'succeeded') {
            navigation.navigate('Sign In')
        }
    })

    return (
        <View style={Styles.container}>
            <Text>
                {email ? `Email has been sent to ${email}` : "Enter verification code to confirm your email"}

            </Text>
            <EmailVerificationForm status={status} error={error} username={username}/>
        </View>
    )
}