import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../store/hooks";
import {Animated} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {isSubmitting, manageFade} from "../../util/common.util";
import {Styles} from "./styles";
import DefaultActivityIndicator from "../../component/common/activity-indicator/DefaultActivityIndicator";
import {Status} from "../../domain/Status";
import EmailVerificationForm from "../../component/auth/email-verification/EmailVerificationForm";


const SignInScreen = () => {
    const status: Status = useAppSelector(state => state.auth.status);
    const error = useAppSelector(state => state.auth.error)
    const username = useAppSelector(state => state.auth.user?.username)
    const [opacity] = useState(new Animated.Value(1))

    manageFade(status, opacity)

    const navigation = useNavigation()

    useEffect(() => {
        if (status === 'verified') {
            navigation.reset({
                index: 0,
                routes: [{name: 'Sign In'}]
            })
        }
    })

    return (
        <Animated.View style={[Styles.container, {opacity}]} pointerEvents={isSubmitting(status) ? 'none' : 'auto'}>
            {isSubmitting(status) && <DefaultActivityIndicator/>}
            <EmailVerificationForm status={status} error={error} username={username || ''}/>
        </Animated.View>
    )
}

export default SignInScreen;