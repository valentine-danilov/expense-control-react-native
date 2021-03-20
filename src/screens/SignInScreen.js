import * as React from 'react';
import {View, Button} from 'react-native';
import SignInForm from "../components/auth/SignInForm";


const SignInScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <SignInForm/>
            <Button title="Don't have an account? Sign Up now!" onPress={() => navigation.navigate('Sign Up')}/>
        </View>
    )
}

export default SignInScreen;