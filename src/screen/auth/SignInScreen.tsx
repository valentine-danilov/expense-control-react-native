import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../store/hooks";
import {Animated} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {isSubmitting, manageFade} from "../../util/common.util";
import {Styles} from "./styles";
import DefaultActivityIndicator from "../../component/common/activity-indicator/DefaultActivityIndicator";
import SignInForm from "../../component/auth/sign-in/SignInForm";
import ActionButton from "../../component/common/button/ActionButton";
import {Statuses} from "../../util/status.util";


const SignInScreen = () => {
    const status = useAppSelector(state => state.auth.status);
    const error = useAppSelector(state => state.auth.error)
    const [opacity] = useState(new Animated.Value(1))

    manageFade(status, opacity)

    const navigation = useNavigation()

    useEffect(() => {
        if (status === Statuses.SIGNED_IN) {
            navigation.reset({
                index: 0,
                routes: [{name: 'Home'}]
            })
        } else if (status === Statuses.NOT_VERIFIED) {
            navigation.navigate('Verify Email')
        }
    })

    return (

        <Animated.View style={[Styles.container, {opacity}]} pointerEvents={isSubmitting(status) ? 'none' : 'auto'}>
            {isSubmitting(status) && <DefaultActivityIndicator/>}
            <SignInForm status={status} error={error}/>
            <ActionButton title="Don't have an account? Sign Up now!" onPress={() => navigation.navigate("Sign Up")}/>
        </Animated.View>
    )
}

export default SignInScreen;