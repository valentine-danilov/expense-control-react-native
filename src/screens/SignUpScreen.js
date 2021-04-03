import * as React from 'react';
import {View} from 'react-native';
import SignUpForm from "../components/auth/SignUpForm";
import {styles} from "./Screen.styles";
import ActionButton from "../components/common/button/ActionButton";


const SignUpScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SignUpForm/>
            <ActionButton title="Already have an account? Sign In now" onPress={() => navigation.navigate('Sign In')}/>
        </View>
    )
}

export default SignUpScreen;