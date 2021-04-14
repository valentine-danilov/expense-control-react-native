import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../store/hooks";
import {Animated} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {isSubmitting, manageFade} from "../../util/common.util";
import {Styles} from "./styles";
import DefaultActivityIndicator from "../../component/common/activity-indicator/DefaultActivityIndicator";
import SignInForm from "../../component/auth/sign-in/SignInForm";
import ActionButton from "../../component/common/button/ActionButton";
import {Statuses} from "../../util/status.util";
import SignUpForm from "../../component/auth/sign-up/SignUpForm";
import {Status} from "../../domain/Status";


const SignInScreen = () => {
    const status: Status = useAppSelector(state => state.auth.status);
    const error = useAppSelector(state => state.auth.error)
    const [opacity] = useState(new Animated.Value(1))

    manageFade(status, opacity)

    const navigation = useNavigation()

    useEffect(() => {
        if (status === 'not-verified') {
            navigation.reset({
                index: 0,
                routes: [{name: 'Verify Email'}]
            })
        }
    })

    return (
        <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <Animated.View style={[Styles.container, {opacity}]} pointerEvents={isSubmitting(status) ? 'none' : 'auto'}>
                {isSubmitting(status) && <DefaultActivityIndicator/>}
                <SignUpForm status={status} error={error}/>
                <ActionButton title="Already have an account? Sign In now"
                              onPress={() => navigation.navigate('Sign In')}/>
            </Animated.View>
        </KeyboardAwareScrollView>
    )
}

export default SignInScreen;