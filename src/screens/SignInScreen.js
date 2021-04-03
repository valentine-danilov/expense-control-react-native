import * as React from 'react';
import {View, KeyboardAvoidingView, ActivityIndicator, Animated} from 'react-native';
import SignInForm from "../components/auth/SignInForm";
import {styles} from "./Screen.styles";
import ActionButton from "../components/common/button/ActionButton";
import {useSelector} from "react-redux";
import {useState} from "react";
import {fadeIn, fadeOut} from "../service/animation/animation.service";

const SignInScreen = ({navigation}) => {
    const status = useSelector(state => state.auth.status);

    const [opacity] = useState(new Animated.Value(1))

    if (isSubmitting(status)) {
        fadeOut(opacity)
    }

    if (!isSubmitting(status)) {
        fadeIn(opacity)
    }

    return (
        <Animated.View style={[styles.container, {opacity}]} pointerEvents={isSubmitting(status) ? 'none' : 'auto'}>
            {isSubmitting(status) && (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator size="large" color="#3F5EFB"/>
                </View>
            )}
            <SignInForm/>
            <ActionButton title="Don't have an account? Sign Up now!" onPress={() => navigation.navigate('Sign Up')}/>
        </Animated.View>
    )
}

const isSubmitting = status => status === 'loading'


export default SignInScreen;