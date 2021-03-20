import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import store from './src/storage/store'
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Sign Up">
                    <Stack.Screen name="Sign In" component={SignInScreen}/>
                    <Stack.Screen name="Sign Up" component={SignUpScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
