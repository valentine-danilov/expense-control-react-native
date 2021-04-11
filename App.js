import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import store from './src/storage/store'
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import {HomeScreen} from "./src/screens/Home";
import config from './aws-exports';
import Amplify from '@aws-amplify/core';
import {EmailVerificationScreen} from "./src/screens/EmailVerificationScreen";
import Screens from './src/util/screen-name.util'

Amplify.configure(config);

const Stack = createStackNavigator();

const setOptions = (navigation, {title, headerLeft}) => {
    return {
        title,
        headerLeft
    }
}

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={Screens.SIGN_IN}>
                    <Stack.Screen name={Screens.SIGN_IN} component={SignInScreen} options={() => ({title: 'Sign In', headerLeft: null})}/>
                    <Stack.Screen name={Screens.SIGN_UP} component={SignUpScreen} options={() => ({title: 'Sign Up', headerLeft: null})}/>
                    <Stack.Screen name={Screens.HOME} component={HomeScreen} options={() => ({title: 'Expense Control', headerLeft: null})}/>
                    <Stack.Screen name={Screens.EMAIL_VERIFICATION} component={EmailVerificationScreen} options={() => ({title: 'Email Verification', headerLeft: null})}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
