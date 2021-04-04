import React, {useState, useEffect} from "react";
import {Animated, View} from 'react-native';
import {useSelector} from "react-redux";

import Styles from "./styles";
import SignUpForm from "../components/auth/sign-up/SignUpForm";
import ActionButton from "../components/common/button/ActionButton";
import {isSubmitting, manageFade} from "../util/common.util";
import DefaultActivityIndicator from "../components/common/activity-indicator/DefaultActivityIndicator";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import STATUS from '../util/status.util'


const SignUpScreen = ({navigation}) => {
    const status = useSelector(state => state.auth.signUp.status);
    const error = useSelector(state => state.auth.signUp.error);
    const verificationDestination = useSelector(state => state.auth.userVerification.dest)
    const username = useSelector(state => state.auth.user.username)

    const [opacity] = useState(new Animated.Value(1))
    manageFade(status, opacity)

    useEffect(() => {
        if (status === STATUS.SUCCEEDED) {
            navigation.navigate('Email verification', {email: verificationDestination, username: username})
        }
    })

    return (
        <KeyboardAwareScrollView>
            <Animated.View style={[Styles.container, {opacity}]} pointerEvents={isSubmitting(status) ? 'none' : 'auto'}>
                {isSubmitting(status) && <DefaultActivityIndicator/>}
                <SignUpForm status={status} error={error}/>
                <ActionButton title="Already have an account? Sign In now"
                              onPress={() => navigation.navigate('Sign In')}/>
            </Animated.View>
        </KeyboardAwareScrollView>
    )
}

export default SignUpScreen;