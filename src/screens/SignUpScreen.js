import * as React from 'react';
import {View, Button} from 'react-native';
import SignUpForm from "../components/auth/SignUpForm";


const SignUpScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <SignUpForm/>
            <Button title="Already have an account? Sign In now" onPress={() => navigation.navigate('Sign In')}/>
        </View>
    )
}

export default SignUpScreen;