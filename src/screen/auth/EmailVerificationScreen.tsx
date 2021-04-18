import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../store/hooks";
import {Animated, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {isSubmitting, manageFade} from "../../util/common.util";
import {Styles} from "./styles";
import DefaultActivityIndicator from "../../component/common/activity-indicator/DefaultActivityIndicator";
import {Status} from "../../domain/Status";
import EmailVerificationForm from "../../component/auth/email-verification/EmailVerificationForm";
import {Text} from "react-native-paper";
import {User} from "../../domain/auth/User";


const SignInScreen = () => {
    const status: Status = useAppSelector(state => state.auth.status);
    const error = useAppSelector(state => state.auth.error)
    const user = useAppSelector(state => state.auth.user)
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
        <View style={Styles.container}>
            <View style={{flex: 1, justifyContent: 'flex-end', alignContent: "center"}}>
                <Text textBreakStrategy="balanced" style={{textAlign: 'center', fontWeight: 'bold'}}>
                    {getFormInfo(user)}
                </Text>
            </View>
            <Animated.View style={[Styles.container, {flex: 2}, {opacity}]}
                           pointerEvents={isSubmitting(status) ? 'none' : 'auto'}>
                {isSubmitting(status) && <DefaultActivityIndicator/>}
                <EmailVerificationForm style={{justifyContent: 'flex-start'}} status={status} error={error} username={user?.username || ''}/>
            </Animated.View>
        </View>

    )
}

const getFormInfo = (user?: User) => {
    if (!user) {
        return 'Your account appeared to be not confirmed. Verification code sent to the email you specified when you was creating this account.'
    }
    const infoPrefix = 'Verification code was sent to ';
    const infoSuffix = user?.verificationDestination ? user?.verificationDestination : `${user?.username} user's email`
    return infoPrefix + infoSuffix;
}

export default SignInScreen;