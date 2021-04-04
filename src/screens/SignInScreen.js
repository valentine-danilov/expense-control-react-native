import React, {useEffect, useState} from "react";
import {Animated} from 'react-native';
import {useSelector} from "react-redux";

import SignInForm from "../components/auth/sign-in/SignInForm";
import DefaultActivityIndicator from "../components/common/activity-indicator/DefaultActivityIndicator";
import Styles from "./styles";
import ActionButton from "../components/common/button/ActionButton";
import {isSubmitting, manageFade} from "../util/common.util";
import STATUS from '../util/status.util'

const SignInScreen = ({navigation}) => {
    const status = useSelector(state => state.auth.signIn.status);
    const error = useSelector(state => state.auth.signIn.error)
    const username = useSelector(state => state.auth.user.username)
    const [opacity] = useState(new Animated.Value(1))

    manageFade(status, opacity)

    useEffect(() => {
        if (status === STATUS.SUCCEEDED) {
            navigation.navigate('Home')
        }
        if (status === STATUS.USER_NOT_CONFIRMED){
            navigation.navigate('Email verification', {username: username})
        }
    })

    return (
        <Animated.View style={[Styles.container, {opacity}]} pointerEvents={isSubmitting(status) ? 'none' : 'auto'}>
            {isSubmitting(status) && <DefaultActivityIndicator/>}
            <SignInForm status={status} error={error}/>
            <ActionButton title="Don't have an account? Sign Up now!" onPress={() => navigation.navigate('Sign Up')}/>
        </Animated.View>
    )
}

export default SignInScreen;