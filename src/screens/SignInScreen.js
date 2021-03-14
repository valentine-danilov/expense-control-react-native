import * as React from 'react';
import {View, Text, Button} from 'react-native';
import SignInForm from "../components/auth/SignInForm";

const SignInScreen = ({navigation}) => {
    return (
        <>
            <SignInForm/>
        </>
    )
}

export default SignInScreen;