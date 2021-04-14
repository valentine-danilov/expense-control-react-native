import Auth from '@aws-amplify/auth';
import {CognitoUser, CognitoUserSession, ISignUpResult} from "amazon-cognito-identity-js";
import {User} from "../../domain/auth/User";

export const doSignIn = async (username: string, password: string) => {
    let cognitoUser: CognitoUser = await Auth.signIn(username, password);
    let session = cognitoUser.getSignInUserSession();
    const userInfo = await Auth.currentUserInfo()
    if (session && session.isValid()) {
        const loggedInUser = getUserInfo(userInfo, session);
        console.log(loggedInUser)
        return loggedInUser
    } else {
        throw new Error("Session is null or invalid")
    }
}

export const doSignUp = async (username: string, email: string, password: string) => {
    let signUpResult: ISignUpResult = await Auth.signUp({username, password, attributes: {email}})
    console.log(signUpResult)
    return signUpResultToUser(signUpResult)
}

export const doVerify = async (username: string, code: string) => {
    await Auth.confirmSignUp(username, code)
}

export const doSignOut = async () => {
    if (await Auth.signOut()) {
        return {result: true}
    } else {
        return {result: false}
    }
}

const signUpResultToUser = (signUpResult: ISignUpResult): User => {
    return {
        sub: signUpResult.userSub,
        username: signUpResult.user.getUsername(),
        verificationDestination: signUpResult.codeDeliveryDetails.Destination
    }
}

const getUserInfo = (userInfo: any, userSession: CognitoUserSession): User => {
    return {
        id: userInfo.id,
        sub: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        token: userSession.getAccessToken().getJwtToken(),
        expires: userSession.getAccessToken().payload.exp,
        refreshToken: userSession.getRefreshToken().getToken()
    } as User
}
