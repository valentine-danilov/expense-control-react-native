import React, {useState} from "react";
import {Appbar, Avatar, Button, Dialog, Portal} from "react-native-paper";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {StackHeaderProps} from "@react-navigation/stack";
import {signOut} from "../../../store/auth/sign-out/thunk";
import {Status} from "../../../domain/Status";
import {View} from "react-native";
import ActionButton from "../button/ActionButton";


const NavigationBar: React.FC<StackHeaderProps> = ({scene, navigation}) => {

    const status: Status = useAppSelector(state => state.auth.status)
    const [signOutDialogVisible, setSignOutDialogState]  = useState(false)

    const showSignOutDialog = () => setSignOutDialogState(true)
    const hideSignOutDialog = () => setSignOutDialogState(false)

    const dispatch = useAppDispatch()

    const handleSignOut = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Sign In'}]
        })
        dispatch(signOut())
    }

    return (
        <Appbar.Header>
            <Appbar.Content
                titleStyle={{color: '#8c8c8c'}}
                title={scene.descriptor.options.title}
            />
            {(status === 'signed-in') && (
                <View>
                    <Appbar.Action  color="#8c8c8c" icon="logout" onPress={showSignOutDialog}/>
                    <Portal>
                        <Dialog visible={signOutDialogVisible} onDismiss={hideSignOutDialog}>
                            <Dialog.Title>Are you sure you want to sign out?</Dialog.Title>
                            <Dialog.Actions>
                                <ActionButton style={{marginRight: 5}} title="No" onPress={hideSignOutDialog}/>
                                <ActionButton title="Yes" onPress={handleSignOut}/>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            )}

        </Appbar.Header>
    )
}

export default NavigationBar;