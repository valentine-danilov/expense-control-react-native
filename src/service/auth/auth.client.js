export const doAuthenticate = async (username, password) => {
    console.log(`DO AUTH :: ${username} ${password}`)
    if (username === 'admin' && password === 'admin') {
        return Promise.resolve({
            token: 'token'
        })
    }
    return Promise.resolve({
        error: "Invalid username or password"
    })
}

export const doSignUp = async ({firstName, lastName, login, email, password}) => {
    console.log('DO SIGN UP :: ', {firstName, lastName, login, email, password})
    return Promise.resolve({firstName})
}