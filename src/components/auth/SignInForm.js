import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {View, Text, TextInput, Button} from 'react-native'
import t from 'tcomb-form-native'
import {signIn} from '../../storage/auth/slice/auth.slice'

const Form = t.form.Form
const SignInFormType = t.struct({
    email: t.String,
    password: t.String
})

const SignInForm = () => {
    const dispatch = useDispatch();
    //const status = useSelector(state => state.status)

    let formValue;
    const handleSubmit = () => {
        const value = formValue.getValue();
        dispatch(signIn({
            username: value.email,
            password: value.password
        }))
    }

    return (
        <View>
            <Form ref={value => formValue = value} type={SignInFormType}/>
            <Button title="Sign In" onPress={handleSubmit}/>
        </View>
    )
}

export default SignInForm;