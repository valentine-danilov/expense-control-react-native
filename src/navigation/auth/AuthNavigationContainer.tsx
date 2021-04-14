import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../../screen/auth/Home";
import SignInScreen from "../../screen/auth/SignInScreen";
import SignUpScreen from "../../screen/auth/SignUpScreen";
import EmailVerificationScreen from "../../screen/auth/EmailVerificationScreen";
import NavigationBar from "../../component/common/navigation-bar/NavigationBar";

const Stack = createStackNavigator();

export default function AuthNavigationContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Sign In"}
                             screenOptions={{
                                 header: (props => <NavigationBar {...props}/>)
                             }}
            >
                <Stack.Screen name={"Home"} component={HomeScreen} options={{title: 'Expense Control', headerLeft: undefined}}/>
                <Stack.Screen name={"Sign In"}  component={SignInScreen} options={{title: 'Sign In', headerLeft: undefined}}/>
                <Stack.Screen name={"Sign Up"} component={SignUpScreen} options={{title: 'Sign Up', headerLeft: undefined}}/>
                <Stack.Screen name={"Verify Email"} component={EmailVerificationScreen} options={{title: 'Verify Email', headerLeft: undefined}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}