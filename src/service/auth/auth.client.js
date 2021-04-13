import Auth from '@aws-amplify/auth';

export const doVerify = async ({username, code}) => {
    return await Auth.confirmSignUp(username, code);
}

export const doAuthenticate = async ({username, password}) => {
    try {
        let response = await Auth.signIn(username, password);
        if (response.signInUserSession) {
            const email = response.attributes.email
            const username = response.username
            return {token: response.signInUserSession.accessToken.jwtToken, user: {username, email}}
        }
    } catch (err) {
        console.log(err)
        return {
            error: err,
            user: {
                username
            }
        }
    }
}

export const doSignUp = async ({firstName, lastName, login, email, password}) => {
    let response = await Auth.signUp({'username': login, 'password': password, 'attributes': {'email': email}})
    return {
        confirmationDestination: response.codeDeliveryDetails.Destination,
        username: response.user.getUsername()
    }
}

export const doSignOut = async () => {
    try {
        const res = await Auth.signOut()
        return {
            result: true
        }
    } catch (err) {
        console.log("Unable to sign out")
        return {
            error: err.message,
            result: false
        }
    }
}