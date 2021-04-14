import React from "react";
import {Appbar} from "react-native-paper";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {StackHeaderProps} from "@react-navigation/stack";
import {signOut} from "../../../store/auth/sign-out/thunk";
import {Status} from "../../../domain/Status";


const NavigationBar: React.FC<StackHeaderProps> = ({scene, navigation}) => {

    const status: Status = useAppSelector(state => state.auth.status)

    const dispatch = useAppDispatch()

    const handleSignOut = () => {
        dispatch(signOut())
        navigation.reset({
            index: 0,
            routes: [{name: 'Sign In'}]
        })
    }

    return (
        <Appbar.Header>
            <Appbar.Content
                titleStyle={{color: '#8c8c8c'}}
                title={scene.descriptor.options.title}
            />
            {(status === 'signed-in') && <Appbar.Action color="#8c8c8c" icon="logout" onPress={handleSignOut}/>}
        </Appbar.Header>
    )
}

export default NavigationBar;