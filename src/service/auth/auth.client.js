import Auth from '@aws-amplify/auth';

export const doVerify = async ({username, code}) => {
    return await Auth.confirmSignUp(username, code);
}

export const doAuthenticate = async ({username, password}) => {
    try {
        let response = await Auth.signIn(username, password);
        if (response.signInUserSession) {
            return {token: response.signInUserSession.accessToken.jwtToken, user: {}}
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

/*export const doAuthenticate = async (username, password) => {
    console.log("doAuthenticate")

    let response = await Auth.signIn(username, password);
    console.log(response)
    if (response.signInUserSession) {
        return {
            token: response.signInUserSession.accessToken.jwtToken,
            username: response.signInUserSession.payload.username
        }
    }
    console.log(response.challengeParam.userAttributes.email)
    return {email: response.challengeParam.userAttributes.email, username: response.username};
}*/

export const doSignUp = async ({firstName, lastName, login, email, password}) => {
    let response = await Auth.signUp({'username': login, 'password': password, 'attributes': {'email': email}})
    console.log('SIGN UP :: ', response)
    return {
        confirmationDestination: response.codeDeliveryDetails.Destination,
        username: response.user.getUsername()
    }
}