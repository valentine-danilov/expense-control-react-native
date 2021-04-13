import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import Amplify from '@aws-amplify/core';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper'

import NavigationBar from "./src/components/common/navigation-bar/NavigationBar";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/Home";
import EmailVerificationScreen from "./src/screens/EmailVerificationScreen";
import Screens from './src/util/screen-name.util'
import store from './src/storage/store'

import config from './aws-exports';
Amplify.configure(config);

const Stack = createStackNavigator();
const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ffccff',
        text: '#8c8c8c',
        accent: '#ff80ff',
        error: '#800080'
    }
}

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider theme={AppTheme}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={Screens.SIGN_IN} screenOptions={{
                        header: (props) => <NavigationBar {...props}/>
                    }}>
                        <Stack.Screen name={Screens.SIGN_IN} component={SignInScreen} options={() => ({title: 'Sign In', headerLeft: null})}/>
                        <Stack.Screen name={Screens.SIGN_UP} component={SignUpScreen} options={() => ({title: 'Sign Up', headerLeft: null})}/>
                        <Stack.Screen name={Screens.HOME} component={HomeScreen} options={() => ({title: 'Expense Control', headerLeft: null})}/>
                        <Stack.Screen name={Screens.EMAIL_VERIFICATION} component={EmailVerificationScreen} options={() => ({title: 'Email Verification', headerLeft: null})}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </Provider>
    );
}