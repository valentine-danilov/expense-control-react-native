import React, {useEffect, useState} from "react";
import {Animated} from 'react-native';
import {useSelector} from "react-redux";

import SignInForm from "../components/auth/sign-in/SignInForm";
import DefaultActivityIndicator from "../components/common/activity-indicator/DefaultActivityIndicator";
import Styles from "./styles";
import ActionButton from "../components/common/button/ActionButton";
import {isSubmitting, manageFade} from "../util/common.util";
import Status from '../util/status.util'
import Screens from '../util/screen-name.util'
import {useNavigation} from "@react-navigation/native";

const SignInScreen = () => {
    const status = useSelector(state => state.auth.status);
    const error = useSelector(state => state.auth.error)
    const username = useSelector(state => state.auth.user.username)
    const [opacity] = useState(new Animated.Value(1))

    manageFade(status, opacity)

    const navigation = useNavigation()

    useEffect(() => {
        if (status === Status.LOGGED_IN) {
            navigation.reset({
                index: 0,
                routes: [{name: Screens.HOME}]
            })
        }
        if (status === Status.USER_NOT_CONFIRMED){
            navigation.navigate(Screens.EMAIL_VERIFICATION, {username: username})
        }
    })

    return (

        <Animated.View style={[Styles.container, {opacity}]} pointerEvents={isSubmitting(status) ? 'none' : 'auto'}>
            {isSubmitting(status) && <DefaultActivityIndicator/>}
            <SignInForm status={status} error={error}/>
            <ActionButton title="Don't have an account? Sign Up now!" onPress={() => navigation.navigate(Screens.SIGN_UP)}/>
        </Animated.View>
    )
}

export default SignInScreen;