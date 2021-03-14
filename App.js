import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "./src/screens/HomeScreen";
import {DetailsScreen} from "./src/screens/DetailsScreen";
import {Provider} from "react-redux";
import store from './src/storage/store'
import SignInScreen from "./src/screens/SignInScreen";
const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Sign In">
                    <Stack.Screen name="Sign In" component={SignInScreen}/>
                    <Stack.Screen name="Details" component={DetailsScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
