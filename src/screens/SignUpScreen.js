import React, {useState, useEffect} from "react";
import {Animated, View} from 'react-native';
import {useSelector} from "react-redux";

import Styles from "./styles";
import SignUpForm from "../components/auth/sign-up/SignUpForm";
import ActionButton from "../components/common/button/ActionButton";
import {isSubmitting, manageFade} from "../util/common.util";
import DefaultActivityIndicator from "../components/common/activity-indicator/DefaultActivityIndicator";


const SignUpScreen = ({navigation}) => {
    const status = useSelector(state => state.signUp.status);
    const error = useSelector(state => state.signUp.error);
    const [opacity] = useState(new Animated.Value(1))

    manageFade(status, opacity)

    useEffect(() => {
        if (status === 'succeeded') {
            navigation.navigate('Sign In')
        }
    })

    return (
        <Animated.View style={[Styles.container, {opacity}]} pointerEvents={isSubmitting(status) ? 'none' : 'auto'}>
            {isSubmitting(status) && <DefaultActivityIndicator/>}
            <SignUpForm status={status} error={error}/>
            <ActionButton title="Already have an account? Sign In now" onPress={() => navigation.navigate('Sign In')}/>
        </Animated.View>
    )
}

export default SignUpScreen;