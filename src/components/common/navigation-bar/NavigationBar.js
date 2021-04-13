import React from "react";
import {Appbar} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {signOut} from "../../../storage/authentication/sign-out/thunk";
import Screens from '../../../util/screen-name.util'
import Status from '../../../util/status.util'


const NavigationBar = ({scene, navigation}) => {

    const signedIn = useSelector(state => state.auth.status)

    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signOut())
        navigation.reset({
            index: 0,
            routes: [{name: Screens.SIGN_IN}]
        })
    }

    return (
        <Appbar.Header>
            <Appbar.Content
                titleStyle={{color: '#8c8c8c'}}
                title={scene.descriptor.options.title}
            />
            {(signedIn === Status.LOGGED_IN) && <Appbar.Action color="#8c8c8c" icon="logout" onPress={handleSignOut}/>}
        </Appbar.Header>
    )
}

export default NavigationBar;