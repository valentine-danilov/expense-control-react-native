import {animationTimeout} from "../animation/animation.service";

export const doAuthenticate = (username, password) => {
    console.log(`DO AUTH :: ${username} ${password}`)
    if (username === 'admin' && password === 'admin') {
        return new Promise((resolve) => {
            setTimeout(() => resolve({
                token: "token"
            }), 5000)
        })
    }

    return new Promise((resolve) => {
        setTimeout(() => resolve({
            error: "Invalid username or password"
        }), 5000)
    })
}

export const doSignUp = async ({firstName, lastName, login, email, password}) => {
    console.log('DO SIGN UP :: ', {firstName, lastName, login, email, password})
    return new Promise((resolve) => {
        setTimeout(() => resolve({
            firstName
        }), 5000)
    })
}