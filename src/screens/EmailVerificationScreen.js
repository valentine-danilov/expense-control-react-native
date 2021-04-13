import React, {useEffect} from "react";
import {View, Text} from "react-native";
import {useSelector} from "react-redux";
import EmailVerificationForm from "../components/auth/email-verification/EmailVerificationForm";
import Styles from './styles'
import STATUS from '../util/status.util'
import Screens from '../util/screen-name.util'

const EmailVerificationScreen = ({route, navigation}) => {

    const status = useSelector(state => state.auth.userVerification.status);
    const error = useSelector(state => state.auth.userVerification.error)
    const email = route.params.email;
    const username = route.params.username;

    useEffect(() => {
        if (status === STATUS.SUCCEEDED) {
            navigation.navigate(Screens.SIGN_IN)
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

export default EmailVerificationScreen;